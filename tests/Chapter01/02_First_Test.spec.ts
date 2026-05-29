//Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Recorded cursor test', async ({ page }) => {

    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keyword
    page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testerstalk');
    page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on the playlist
    page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 29.2K+ followers' }).first().click();;

    // Validat the webpage title
    await expect(page).toHaveTitle('Playwright by Testers Talk - YouTube');
    await page.locator('iframe[name="a-l1uf85w86aqg"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
    await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
    await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();
    
    await expect(page.getByLabel('#1 Playwright Tutorial Full Course 2024').locator('#video-title')).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
    await expect(page.getByLabel('#2 Playwright API Testing Tutorial Crash Course 2024').locator('#video-title')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');


})



