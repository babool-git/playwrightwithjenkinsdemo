//Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Handling element and drag drop in Playwright', async ({ page }) => {

    await page.goto('https://jqueryui.com/droppable/');
    //switch to iframe

   const iframe =page.frameLocator('[class="demo-frame"]');


    //drag and drop element
    const dragelement = iframe.locator('[id="draggable"]');
    const dropelement = iframe.locator('[id="droppable"]');

    await dragelement.dragTo(dropelement);
    await expect (dropelement.locator('p')).toHaveText('Dropped!');

    
   

})



