// Import playwright module
import { test, expect } from '@playwright/test';

test('Read env file config in playwright ', async ({ page }) => {

    await page.goto(`${process.env.GOOGLE_URL}`);
    const iframe = await page.frameLocator('[class="demo-frame"]');

    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();
    await iframe.locator('[for="radio-1"]').check();
   await expect(iframe.locator('[for="radio-1"]')).toBeChecked();
  

});











      