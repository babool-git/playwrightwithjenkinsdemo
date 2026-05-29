// Import playwright module
import { test, expect } from '@playwright/test';

test('Iterating elements', async ({ page }) => {

  await page.goto('https://github.com/BakkappaN');
 // const repositoryLinks = await page.locator('[class="repo"]').all();
  const repositoryLinks = await page.$$('[class="repo"]');

  for (const repositoryLink of repositoryLinks) {
    const text = await repositoryLink.textContent();
    console.log(`Text from 1st loop: ${text}`);
  }

  console.log('-----------------------------');

  for (let index=0; index<repositoryLinks.length; index++) {

    const text = await repositoryLinks[index].textContent();
    console.log(`Text from 2nd loop: ${text}`);

  }

console.log('-----------------------------');
  const repositoryLinks2 = await page.locator('[class="repo"]');
  const count = await repositoryLinks2.count();
    for (let index=0; index<count; index++) {
    const text = await repositoryLinks2.nth(index).textContent();
    console.log(`Text from 3rd loop: ${text}`);
  }






});











      