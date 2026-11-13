import { Page, Locator } from "../../fotoblog-fixtures";
import { step } from "../../helpers/test-step-decorator";

export class PublicNavigation {

    readonly page: Page;
    readonly homeButton: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = this.page.getByRole('link', { name: 'Home' });
        this.loginButton = this.page.getByRole('link', { name: 'Zaloguj' });
    }

    @step
    async goToHome() {
        await this.homeButton.click();
    }

    @step
    async goToLogin() {
        await this.loginButton.click();
    }
}