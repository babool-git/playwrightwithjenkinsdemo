// Import playwright module
//import { test, expect } from '@playwright/test';
// import { HomePage } from '../../src/pages/HomePage';
// import { ResultPage } from '../../src/pages/ResultPage';
// import { PlaylistPage } from '../../src/pages/PlaylistPage';

// Minimal HomePage stub to allow instantiation in this test file.
// Replace or remove when using the real page object implementation.

import {test} from '../../src/fixture/TestFixture';

test('Implementing fixtures in Playwright ', async ({ page, homePage, resultPage, playlistpage, testData }) => {

     console.log('Test execution is started..................');
         //Create object of HomePage
    //const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.searchWithKeywords(String(testData.Module1TestData.Skill1));
    await resultPage.clickOnPlaylist(String(testData.Module1TestData.Skill1));
    await playlistpage.validatePageTitle(String(testData.Module1TestData.Skill1));


     console.log('Test execution ended..................');
  

});











      