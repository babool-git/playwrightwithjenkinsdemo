//Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Capture screenshots in playwright ', async ({ page }) => {

    // Go to URL
    await page.goto('https://www.youtube.com/@testerstalk');
    
    //Element screenshot
    await page.locator('#page-header-container').screenshot({ path: './Screenshots/ElementScreenshot.png' });

    //Page screenshot
     await page.screenshot({ path: './Screenshots/PageScreenshot.png' });

    //Fullpage screenshot
    await page.screenshot({ path: './Screenshots/FullPageScreenshot.png', fullPage: true });
    
    
})



