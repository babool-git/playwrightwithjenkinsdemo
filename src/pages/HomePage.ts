import { Page, Locator } from "@playwright/test";

export class HomePage {

    readonly page:Page;

    readonly searchTextbox : Locator;

    constructor(page: Page) {
        this.page = page;


    //Elements
   this.searchTextbox =page.locator('[name="search_query"]');


    }

    //Methods

    async goToURL() {
       await this.page.goto(`${process.env.GOOGLE_URL}`);
    }

async searchWithKeywords(keywords :string){

     await this.searchTextbox.click();
    await this.searchTextbox.fill(keywords);
     await this.searchTextbox.press('Enter');
}


    }
