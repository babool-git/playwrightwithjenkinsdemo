import { test, expect } from '@playwright/test';

test('Codegen test case', {tag: ['@PlaywrightWithJenkins']}, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.goto('https://www.youtube.com/watch?v=788GvvcfwTY&list=PLUeDIlio4THEn2jQpsVpTuABKmUzFC53J');
  await expect(page.getByRole('link', { name: 'Playwright with TypeScript by' })).toBeVisible();
});


test('Test 2 will fail', {tag: ['@PlaywrightWithJenkins']}, async ({ page }) => {
  await page.goto('https://www.youtube.com/@testerstalk');
  expect(true).toBe(false);

});
