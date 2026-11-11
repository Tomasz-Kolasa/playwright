import { Page } from "../fotoblog-fixtures";
import { step } from "../helpers/test-step-decorator";
import { PublicNavigation } from "./components/public-navigation";

export class HomePublicPage {
    readonly page: Page;
    readonly navigation: PublicNavigation;
    readonly homeUrl: string = '/';

    constructor(page: Page, navigation: PublicNavigation) {
        this.page = page;
        this.navigation = navigation;
    }
}