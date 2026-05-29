# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\DatadriventestingJSON.spec.ts >> Data driven testing using JSON file: Javascript by testers talk
- Location: tests\Chapter05\DatadriventestingJSON.spec.ts:26:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Javascript by testers talk' }).first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - separator [ref=e3]
  - iframe [ref=e8]:
    - generic [ref=f2e2]:
      - generic [ref=f2e3]:
        - checkbox "I'm not a robot" [ref=f2e7]
        - generic [ref=f2e11]: I'm not a robot
      - generic [ref=f2e15]: reCAPTCHA
  - separator [ref=e9]
  - generic [ref=e10]:
    - text: About this page
    - text: Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
    - link "Why did this happen?" [ref=e11] [cursor=pointer]:
      - /url: "#"
    - generic [ref=e12]:
      - text: "IP address: 115.98.80.84"
      - text: "Time: 2026-05-27T11:54:40Z"
      - text: "URL: https://www.google.com/search?q=Javascript+by+testers+talk&sca_esv=69538f729b95e5bf&source=hp&ei=ftsWauWiJLCm2roP1-HroQQ&iflsig=AFdpzrgAAAAAahbpjtdikwDr-p5g2k1xwe3xRbuk6BmF&ved=0ahUKEwjl2eG1tNmUAxUwk1YBHdfwOkQQ4dUDCC4&uact=5&oq=Javascript+by+testers+talk&gs_lp=Egdnd3Mtd2l6IhpKYXZhc2NyaXB0IGJ5IHRlc3RlcnMgdGFsa0g1UABYAHAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwDCBwDIBwCACAE&sclient=gws-wiz&sei=f9sWarGJKrrkwN4P-bzSoQQ"
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
  32 |    await  page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
  33 |    await  page.getByRole('combobox', { name: 'Search' }).press('Enter');
  34 | 
  35 |     //Click on the playlist
> 36 |     await page.getByRole('link', { name: skill.Skill1 }).first().click();;
     |                                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
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