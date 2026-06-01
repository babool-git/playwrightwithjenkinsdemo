import { test, expect } from '@playwright/test';

test('Mock API Response Testing using Playwright', async ({ page }) => {

    //MOCK API Response
await page.route('*/**/api/v1/fruits',async route => {

    const response =await route.fetch();
    const json = await response.json();

    json.push({name : 'Tiger', id : 12});
    json.push({name : 'Lion', id : 11});
    json.push({name : 'Deer', id : 10});
    json.push({name : 'Cow', id : 9});
    
    await route.fulfill({response,json});
})
  
 await page.goto('https://demo.playwright.dev/api-mocking/');

 //validate Text
await expect(page.getByText('Tiger')).toBeVisible();
await expect(page.getByText('Lion')).toBeVisible();
await expect(page.getByText('Deer')).toBeVisible();
await expect(page.getByText('Cow')).toBeVisible();



  });

