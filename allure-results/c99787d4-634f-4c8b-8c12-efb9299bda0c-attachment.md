# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\DatadriventestingJSON.spec.ts >> Data driven testing using JSON file: Javascript by testers talk
- Location: tests\Chapter05\DatadriventestingJSON.spec.ts:26:7

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'Javascript by testers talk' }).first()
    - waiting for" https://www.google.com/search?q=Javascript+by+testers+talk&sca_esv=69538f729b95e5bf&source=hp&ei=FNsWatm5F-SX0-kP5Y6ukQQ&iflsig=AFdpzrgAAAAAahbpJImPA4NjEqOzzJcporGJ8TAfO13b&ved=0ahUKEwjZk4-DtNmUAxXky…" navigation to finish...

```

# Test source

```ts
  1  | //Import playwright module
  2  | import { test, expect } from '@playwright/test';
  3  | import testData from '../../test-data/qa/testdata.json';
  4  | 
  5  | type TestData = {
  6  | 
  7  |      TestDataSet1: {
  8  |         Skill1 : string,
  9  |         Skill2 : string
  10 |     },
  11 |     
  12 |     TestDataSet2: {
  13 |         Skill1 : string,
  14 |         Skill2 : string
  15 |     },
  16 | 
  17 | }
  18 | 
  19 | const typedTestData = testData as TestData;
  20 | 
  21 | for (const dataSetName in typedTestData) {
  22 |   const skill = typedTestData[dataSetName as keyof TestData];
  23 | 
  24 | 
  25 | 
  26 |   test(`Data driven testing using JSON file: ${skill.Skill1}`, async ({ page }) => {
  27 |   
  28 |     // Go to URL
  29 |     await page.goto('https://www.google.com/');
  30 | 
  31 |     // Search with keyword
  32 |     page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
  33 |     page.getByRole('combobox', { name: 'Search' }).press('Enter');
  34 | 
  35 |     //Click on the playlist
> 36 |     page.getByRole('link', { name: skill.Skill1 }).first().click();;
     |                                                            ^ Error: locator.click: Test ended.
  37 | 
  38 |    
  39 |       
  40 | 
  41 | })
  42 | 
  43 | 
  44 | 
  45 | }
  46 | 
  47 | 
  48 | // Write a test
  49 | 
  50 | 
  51 | 
  52 | 
  53 | 
```