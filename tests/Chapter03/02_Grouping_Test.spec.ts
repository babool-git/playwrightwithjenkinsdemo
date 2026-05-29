// Import playwright module
import { test, expect } from '@playwright/test';

test.describe('SmokeTesting', ()=>{

test('Test 1', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('link', { name: 'Create new account' }).click();
  //await page.getByLabel('Month').click();
  //await page.getByText('September').click(); 

  await page.getByLabel('Month').click();
 //const months = await page.locator('[role="option"]').allTextContents();
  //console.log(months);


  const months = await page
    .getByRole('option')
   // .filter({ hasText: /January|February|March|April|May|June|July|August|September|October|November|December/ })
    .filter({ hasText: /Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/ }) 
   .allTextContents();

    console.log(months);

    expect(months).toEqual([
  'January',   'February',
  'March',     'April',
  'May',       'June',
  'July',      'August',
  'September', 'October',
  'November',  'December'
])
});

});

test.describe('RegressionTesting', ()=>{

    test('Test 2', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('link', { name: 'Create new account' }).click();
  //await page.getByLabel('Month').click();
  //await page.getByText('September').click(); 

  await page.getByLabel('Month').click();
 //const months = await page.locator('[role="option"]').allTextContents();
  //console.log(months);


  const months = await page
    .getByRole('option')
   // .filter({ hasText: /January|February|March|April|May|June|July|August|September|October|November|December/ })
    .filter({ hasText: /Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/ }) 
   .allTextContents();

    console.log(months);

    expect(months).toEqual([
  'January',   'February',
  'March',     'April',
  'May',       'June',
  'July',      'August',
  'September', 'October',
  'November',  'December'
])
});

test('Test 3', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('link', { name: 'Create new account' }).click();
  //await page.getByLabel('Month').click();
  //await page.getByText('September').click(); 

  await page.getByLabel('Month').click();
 //const months = await page.locator('[role="option"]').allTextContents();
  //console.log(months);


  const months = await page
    .getByRole('option')
   // .filter({ hasText: /January|February|March|April|May|June|July|August|September|October|November|December/ })
    .filter({ hasText: /Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/ }) 
   .allTextContents();

    console.log(months);

    expect(months).toEqual([
  'January',   'February',
  'March',     'April',
  'May',       'June',
  'July',      'August',
  'September', 'October',
  'November',  'December'
])
});



});











      