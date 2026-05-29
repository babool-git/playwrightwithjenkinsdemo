
import { test, expect } from '@playwright/test';

test('KeyboardActions', async ({ page }) => {

    
    await page.goto('https://www.google.com');



    
    await page.getByLabel('Search', { exact: true }).first().click();
    await page.getByLabel('Search', { exact: true }).first().fill('Playwright by Testers Talk');

    //Enter key press
    await page.getByLabel('Search', { exact: true }).first().press('Enter');

//console.log(await page.evaluate(() => document.activeElement?.outerHTML));
    //Selecting and deelting
     //await page.getByLabel('Search', { exact: true }).first().click();
await page.keyboard.press('PageDown');
await page.keyboard.press('Delete');
await page.keyboard.press('PageDown');




    

    
});
