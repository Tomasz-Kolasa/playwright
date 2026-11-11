import {test} from '@playwright/test';

import {LoginPage} from './login-page';
import {PublicNavigation} from './components/public-navigation';

export class PageManager {
    readonly loginPage: LoginPage;

    constructor(page: any) {
        this.loginPage = new LoginPage(page, new PublicNavigation(page));
    }
}