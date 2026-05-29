//Import playwright module
import { test, expect } from '@playwright/test';

import {parse} from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';


type TestRecords = {
Skill1 : string,
skill2 : string

}

const records = parse(
    
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')), 
{
    columns: true,
    skip_empty_lines:true
}

)as TestRecords[]

for (const record of records) {
  test(`Data driven testing using CSV file: ${record.Skill1}`, async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill1);
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
   // await page.getByRole('link', { name: record.Skill1 }).first().click();
  });
} 










