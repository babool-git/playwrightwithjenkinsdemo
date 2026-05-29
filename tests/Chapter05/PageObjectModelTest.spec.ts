// Import playwright module
import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

// Minimal HomePage stub to allow instantiation in this test file.
// Replace or remove when using the real page object implementation.

test('PageObjectModelTest in Playwright ', async ({ page }) => {


   console.log('Test execution has started');
    //Create object of HomePage
    const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);

      //Create objet  of ResultPage
 const resultPage = new ResultPage(page);
 //await resultPage.clickOnPlaylist(`$(process.any.SEARCH_KEYWORDS)`);
 await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);
       //Create objet  of PlaylistPage
       const playlistPage = new PlaylistPage(page);
       await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}`);



  

});











      