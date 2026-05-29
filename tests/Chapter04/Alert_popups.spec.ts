//Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Alert and popups ', async ({ page,browser }) => {

   page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

   page.once('dialog', async (dialog) =>{
   // page.once('dialog', dialog =>{
    //dialog.accept(); //dialog.dismiss(); // to click on cancel button
  //  dialog.dismiss(); // to click on cancel button
    console.log('Alert message is: ' + dialog.message());
    console.log(`Alert message is : ${dialog.message()}`);
     console.log(`Dialog type is : ${dialog.type()}`);
    
    await dialog.accept('Playwright'); // to click on ok button and enter text in prompt
   })

   
   await page.getByText('See a sample prompt', {exact:true}).click();
    
   
   
})



