// Import playwright module
//import { test, expect } from '@playwright/test';
// import { HomePage } from '../../src/pages/HomePage';
// import { ResultPage } from '../../src/pages/ResultPage';
// import { PlaylistPage } from '../../src/pages/PlaylistPage';

// Minimal HomePage stub to allow instantiation in this test file.
// Replace or remove when using the real page object implementation.

import {test} from '../../src/fixture/TestFixture';

test('Implementing fixtures in Playwright ', async ({ page, homePage, resultPage, playlistpage }) => {

     console.log('Test execution is started..................');
         //Create object of HomePage
    //const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);
    await playlistpage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}`);


     console.log('Test execution ended..................');
  

});











      