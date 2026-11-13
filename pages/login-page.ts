import { Locator, Page } from "../fotoblog-fixtures";
import { step } from "../helpers/test-step-decorator";
import { AuthenticatedNavigation } from "./components/authenticated-navigation";
import { PublicNavigation } from "./components/public-navigation";
import { HomeAuthenticatedPage } from "./home-authenticated-page";

export class LoginPage {

  private readonly page: Page;
  readonly navigation: PublicNavigation;

  readonly loginUrl: string = '/login';

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;

  constructor(page: Page, navigation: PublicNavigation) {
    this.page = page;
    this.navigation = navigation;
    this.loginButton = this.page.getByRole('button', { name: 'zaloguj' });
    this.usernameInput = this.page.getByPlaceholder('login...');
    this.passwordInput = this.page.getByPlaceholder('hasło...');
    this.errorMessage = this.page.getByText('Nieprawidłowe dane logowania.');
    this.successMessage = this.page.getByText('Zalogowano!.');
  }

  @step
  async goTo() {
    await this.page.goto(this.loginUrl);
  }

  /**
   * Logs in with the provided username and password.
   * @param username The username to use for login.
   * @param password The password to use for login.
   */
  @step
  async loginWith(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Logs in with the environment variables for username and password.
   * This method is useed for logging in to test the application parts that require authentication.
   * @returns A promise that resolves to an instance of HomeAuthenticatedPage after successful login.
   */
  @step
  async login(email: string, pass: string): Promise<HomeAuthenticatedPage> {

    await this.loginWith(email, pass);

    await this.successMessage.waitFor();
    
    return new HomeAuthenticatedPage(this.page, new AuthenticatedNavigation(this.page));
  }
}