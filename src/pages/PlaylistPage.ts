import { Page, expect } from "@playwright/test";

export class PlaylistPage {

    readonly page:Page;

   
    constructor(page: Page) {
        this.page = page;


    //Elements
   


    }

    //Methods

   
async validatePageTitle(title :string){

    await expect(this.page).toHaveTitle(title);
}


    }
//await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();

//(7097) playwright by testers talk - YouTube