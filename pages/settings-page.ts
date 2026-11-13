import { Locator, Page } from "../fotoblog-fixtures";
import { step } from "../helpers/test-step-decorator";
import { AuthenticatedNavigation } from "./components/authenticated-navigation";

export class SettingsPage {

  readonly page: Page;
  readonly navigation: AuthenticatedNavigation;
  readonly settingsUrl: string = '/settings';

  readonly headingSettings: Locator;

  constructor(page: Page, navigation: AuthenticatedNavigation) {
    this.page = page;
    this.navigation = navigation;
    
    this.headingSettings = this.page.getByRole('heading', { name: 'ustawienia' });
  }

  @step
  async goTo() {
    await this.page.goto(this.settingsUrl);
  }
}