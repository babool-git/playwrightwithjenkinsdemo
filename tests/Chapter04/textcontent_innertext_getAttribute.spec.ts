// Import playwright module
import { test, expect } from '@playwright/test';

test('Get text and Get Attribute', async ({ page }) => {

  await page.goto('https://github.com/BakkappaN');
  const name = await page.locator('[itemprop="name"]').innerText();
  const finalname =name?.trim();
  console.log(`Name is ${finalname}`);

  expect(finalname).toBe('Testers Talk');

  const attributeValue = await page.locator('[href="/BakkappaN?tab=repositories"]').first().getAttribute('data-tab-item');
  console.log(`Attribute value is : ${attributeValue}`);

});











      