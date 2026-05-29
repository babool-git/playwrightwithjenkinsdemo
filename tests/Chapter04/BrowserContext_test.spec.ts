//Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Multiple browser or tabs in playwright ', async ({ page,browser }) => {

    // Go to URL
    await page.goto('https://www.youtube.com/@testerstalk');
    
    //Element screenshot
    await page.locator('#page-header-container').screenshot({ path: './Screenshots/ElementScreenshot.png' });

    //Page screenshot
     await page.screenshot({ path: './Screenshots/PageScreenshot.png' });

    //Fullpage screenshot
    await page.screenshot({ path: './Screenshots/FullPageScreenshot.png', fullPage: true });


    const context2 = await browser.newContext(); // New browser context
    const page2 = await context2.newPage(); // New tab
    


     await page2.goto('https://www.youtube.com/@testerstalk');
    
    //Element screenshot
    await page2.locator('#page-header-container').screenshot({ path: './Screenshots/ElementScreenshot.png' });

    //Page screenshot
     await page2.screenshot({ path: './Screenshots/PageScreenshot.png' });

    //Fullpage screenshot
    await page2.screenshot({ path: './Screenshots/FullPageScreenshot.png', fullPage: true });



const newtab = await context2.newPage(); // New tab
     await newtab.goto('https://www.youtube.com/@testerstalk');
    
    //Element screenshot
    await newtab.locator('#page-header-container').screenshot({ path: './Screenshots/ElementScreenshot.png' });

    //Page screenshot
     await newtab.screenshot({ path: './Screenshots/PageScreenshot.png' });

    //Fullpage screenshot
    await newtab.screenshot({ path: './Screenshots/FullPageScreenshot.png', fullPage: true });

    
    
})



