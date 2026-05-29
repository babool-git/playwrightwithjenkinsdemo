import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('This will run before all tests');
});

test.afterAll(async () => {
    console.log('This will run after all tests');
});

test.beforeEach(async () => {
    console.log('This will run before each test');
});

test.afterEach(async () => {
    console.log('This will run after each test');
});


test('test 1', async ({ page }) => {

    console.log('This is test 1');
  await test.step('Navigate to GitHub', async () => {
    await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();

  });


  await test.step('Enter credentials', async () => {
await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('testerstalk');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  });


  await test.step('Click on Sign in button', async () => {
await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });

   await test.step('Validate the error message', async () => {
await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  });


  
  
  
  
  
});


test('test 2', async ({ page }) => {

    console.log('This is test 2');
  await test.step('Navigate to GitHub', async () => {
    await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();

  });


  await test.step('Enter credentials', async () => {
await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('testerstalk');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  });


  await test.step('Click on Sign in button', async () => {
await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });

   await test.step('Validate the error message', async () => {
await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  });


  
  
  
  
  
});