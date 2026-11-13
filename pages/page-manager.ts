import {LoginPage} from './login-page';
import {PublicNavigation} from './components/public-navigation';
import { AuthenticatedNavigation } from './components/authenticated-navigation';
import { Page } from '../fotoblog-fixtures';
import { HomeAuthenticatedPage } from './home-authenticated-page';
import { HomePublicPage } from './home-public-page';
import { ManageTagsPage } from './manage-tags-page';
import { AddPhotoPage } from './add-photo-page';
import { SettingsPage } from './settings-page';

export class PageManager {
    
    readonly loginPage: LoginPage;
    readonly homeAuthenticatedPage: HomeAuthenticatedPage;
    readonly homePublicPage: HomePublicPage;
    readonly manageTagsPage: ManageTagsPage;
    readonly addPhotoPage: AddPhotoPage;
    readonly settingsPage: SettingsPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page, new PublicNavigation(page));
        this.homeAuthenticatedPage = new HomeAuthenticatedPage(page, new AuthenticatedNavigation(page));
        this.homePublicPage = new HomePublicPage(page, new PublicNavigation(page));
        this.manageTagsPage = new ManageTagsPage(page, new AuthenticatedNavigation(page));
        this.addPhotoPage = new AddPhotoPage(page, new AuthenticatedNavigation(page));
        this.settingsPage = new SettingsPage(page, new AuthenticatedNavigation(page));
    }
}