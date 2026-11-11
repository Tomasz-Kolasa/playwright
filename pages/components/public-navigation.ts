import { Page, Locator } from "@playwright/test";
import { step } from "../../helpers/test-step-decorator";

export class PublicNavigation {

    readonly page: Page;
    private readonly homeButton: Locator;
    private readonly loginButton: Locator;
    private readonly tagsButton: Locator;
    private readonly addPhotoButton: Locator;
    private readonly settingsButton: Locator;
    private readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = this.page.getByRole('link', { name: 'Home' });
        this.loginButton = this.page.getByRole('link', { name: 'Zaloguj' });
        this.tagsButton = this.page.getByRole('link', { name: 'Tagi' });
        this.addPhotoButton = this.page.getByRole('link', { name: 'Dodaj' });
        this.settingsButton = this.page.getByRole('link', { name: 'Ustawienia' });
        this.logoutButton = this.page.getByRole('link', { name: 'Wyloguj' });
    }

    @step
    async goToHome() {
        await this.homeButton.click();
    }

    @step
    async goToLogin() {
        await this.loginButton.click();
    }

    @step
    async goToTags() {
        await this.tagsButton.click();
    }

    @step
    async goToAddPhoto() {
        await this.addPhotoButton.click();
    }

    @step
    async goToSettings() {
        await this.settingsButton.click();
    }

    @step
    async goToLogout() {
        await this.logoutButton.click();
    }
}