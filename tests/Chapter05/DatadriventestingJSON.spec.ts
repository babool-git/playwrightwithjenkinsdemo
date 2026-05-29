//Import playwright module
import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json';

type TestData = {

     TestDataSet1: {
        Skill1 : string,
        Skill2 : string
    },
    
    TestDataSet2: {
        Skill1 : string,
        Skill2 : string
    },

}

const typedTestData = testData as TestData;

for (const dataSetName in typedTestData) {
  const skill = typedTestData[dataSetName as keyof TestData];



  test(`Data driven testing using JSON file: ${skill.Skill1}`, async ({ page }) => {
  
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keyword
   await  page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
   await  page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on the playlist
   // await page.getByRole('link', { name: skill.Skill1 }).first().click();;

   
      

})



}


// Write a test




