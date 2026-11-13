import { Locator, Page } from "../fotoblog-fixtures";
import { step } from "../helpers/test-step-decorator";
import { AuthenticatedNavigation } from "./components/authenticated-navigation";

export class AddPhotoPage {

  readonly page: Page;
  readonly navigation: AuthenticatedNavigation;
  readonly addPhotoUrl: string = '/add-photo';

  readonly headingAddPhoto: Locator;

  constructor(page: Page, navigation: AuthenticatedNavigation) {
    this.page = page;
    this.navigation = navigation;

    this.headingAddPhoto = this.page.getByRole('heading', { name: 'Dodaj zdjęcie' });
  }

  @step
  async goTo() {
    await this.page.goto(this.addPhotoUrl);
  }
}