//Import playwright module
import { test, expect } from '@playwright/test';


import path from 'path';
import {readExcelFile} from '../../src/utils/ExcelHelper';
const filePath = path.join(__dirname, '../../test-data/qa/testdata.xlsx');

const records = readExcelFile(filePath);





for (const record of records) {
  test(`Data driven testing using EXCEL file: ${record.Skill1}`, async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill1);
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
   // await page.getByRole('link', { name: record.Skill1 }).first().click();
  });
} 










