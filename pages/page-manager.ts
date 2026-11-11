import {LoginPage} from './login-page';
import {PublicNavigation} from './components/public-navigation';
import { AuthenticatedNavigation } from './components/authenticated-navigation';
import { Page } from '../fotoblog-fixtures';
import { HomeAuthenticatedPage } from './home-authenticated-page';
import { HomePublicPage } from './home-public-page';

export class PageManager {
    
    readonly loginPage: LoginPage;
    readonly homeAuthenticatedPage: HomeAuthenticatedPage;
    readonly homePublicPage: HomePublicPage;


    constructor(page: Page) {
        this.loginPage = new LoginPage(page, new PublicNavigation(page));
        this.homeAuthenticatedPage = new HomeAuthenticatedPage(page, new AuthenticatedNavigation(page));
        this.homePublicPage = new HomePublicPage(page, new PublicNavigation(page));
    }
}