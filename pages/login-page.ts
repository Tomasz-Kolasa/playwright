import { Locator, Page } from "@playwright/test";
import { step } from "../helpers/test-step-decorator";
import { PublicNavigation } from "./components/public-navigation";

export class LoginPage {

    private readonly page: Page;
    readonly loginUrl: string = '/login';
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;

    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly navigation: PublicNavigation;

    constructor(page: Page, navigation: PublicNavigation) {
        this.page = page;
        this.navigation = navigation;
        this.loginButton = this.page.getByRole('button', { name: 'zaloguj' });
        this.usernameInput = this.page.getByPlaceholder('login...');
        this.passwordInput = this.page.getByPlaceholder('hasło...');
        this.errorMessage = this.page.getByText('Nieprawidłowe dane logowania.');
    }

    @step
    async goTo() {
        await this.page.goto(this.loginUrl);
    }

    @step
    async loginWith(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginUser() {
        const username: string = process.env.LOGIN_USERNAME || '';
        const password: string = process.env.LOGIN_PASSWORD || '';
        await this.loginWith(username, password);
    }
}