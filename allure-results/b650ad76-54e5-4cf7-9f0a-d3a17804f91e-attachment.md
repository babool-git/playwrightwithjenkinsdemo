# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\Read_env_file_test.spec.ts >> Read env file config in playwright 
- Location: tests\Chapter05\Read_env_file_test.spec.ts:4:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "${process.env.GOOGLE_URL}", waiting until "load"

```

# Test source

```ts
  1  | // Import playwright module
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test('Read env file config in playwright ', async ({ page }) => {
  5  | 
> 6  |     await page.goto('${process.env.GOOGLE_URL}');
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  7  |     const iframe = await page.frameLocator('[class="demo-frame"]');
  8  | 
  9  |     await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();
  10 |     await iframe.locator('[for="radio-1"]').check();
  11 |    await expect(iframe.locator('[for="radio-1"]')).toBeChecked();
  12 |   
  13 | 
  14 | });
  15 | 
  16 | 
  17 | 
  18 | 
  19 | 
  20 | 
  21 | 
  22 | 
  23 | 
  24 | 
  25 | 
  26 |       
```