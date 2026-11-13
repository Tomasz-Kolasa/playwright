import { Locator, Page } from "../fotoblog-fixtures";
import { step } from "../helpers/test-step-decorator";
import { AuthenticatedNavigation } from "./components/authenticated-navigation";

export class ManageTagsPage {

  readonly page: Page;
  readonly navigation: AuthenticatedNavigation;
  readonly tagsUrl: string = '/manage-tags';

  readonly buttonAddTag: Locator;

  constructor(page: Page, navigation: AuthenticatedNavigation) {
    this.page = page;
    this.navigation = navigation;

    this.buttonAddTag = this.page.getByRole('button', { name: 'Dodaj tag' });
  }

  @step
  async goTo() {
    await this.page.goto(this.tagsUrl);
  }
}