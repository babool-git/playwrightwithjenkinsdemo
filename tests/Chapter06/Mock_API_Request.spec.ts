import { test, expect } from '@playwright/test';

test('Mock API Testing using Playwright', async ({ page }) => {

    //MOCK API 
await page.route('*/**/api/v1/fruits',async route => {
    const json = [
     {name : 'Tiger', id : 12},
     {name : 'apple', id : 11},
     {name : 'mango', id : 10},
     {name : 'lichi', id : 9},

    ];
    await route.fulfill({json});
})
  
 await page.goto('https://demo.playwright.dev/api-mocking/');

 //validate Text
await expect(page.getByText('Tiger')).toBeVisible();
await expect(page.getByText('Apple')).toBeVisible();
await expect(page.getByText('Mango')).toBeVisible();
await expect(page.getByText('Lichi')).toBeVisible();



  });

