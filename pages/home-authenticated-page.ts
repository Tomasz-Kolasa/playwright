import { Page } from "../fotoblog-fixtures";
import { step } from "../helpers/test-step-decorator";
import { AuthenticatedNavigation } from "./components/authenticated-navigation";

export class HomeAuthenticatedPage {
    readonly page: Page;
    readonly navigation: AuthenticatedNavigation;
    readonly homeUrl: string = '/';

    constructor(page: Page, navigation: AuthenticatedNavigation) {
        this.page = page;
        this.navigation = navigation;
    }
}