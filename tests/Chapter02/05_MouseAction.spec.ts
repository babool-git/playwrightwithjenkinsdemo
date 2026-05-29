
import { test, expect } from '@playwright/test';

test('MouseActions', async ({ page }) => {

    await page.goto('https://www.youtube.com/results?search_query=testers+talk');


    //Left button click 
  //  await page.getByText('Requirements File in Python Project')
 //   .click({ button: 'left' });


  //Middle button click 
  // await page.getByText('Requirements File in Python Project')
   // .click({ button: 'middle' });


   //Right button click 
//    await page.getByText('Requirements File in Python Project')
//    .click({ button: 'right' });

//     await 
    
//     page.waitForTimeout(3000);


    // //Mouse hover action
    // await page.getByLabel('Search with your voice').hover();
    // await page.waitForTimeout(3000);

    //Double click action
      await page.getByLabel('Search with your voice').dblclick();
    await page.waitForTimeout(3000);
    

    
});
