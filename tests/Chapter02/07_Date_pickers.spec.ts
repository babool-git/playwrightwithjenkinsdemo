
import { test, expect } from '@playwright/test';

test('Datepicker', async ({ page }) => {

    
    await page.goto('https://jqueryui.com/datepicker/');


    const iframe = await page.frameLocator('[class="demo-frame"]');

    //Hard coded date
    //    iframe.locator('[id="datepicker"]').fill('09/02/1998');

    //Dynamic date selection

    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[class*="ui-datepicker-today"]').click();
    // await page.waitForTimeout(3000);

    //Past date

    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text=15').click();

    //Future date

    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    // await iframe.locator('text=15').click();

    




    

    
});
