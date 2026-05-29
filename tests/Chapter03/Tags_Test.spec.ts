// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test
test('Test - 1',{tag : '@smoketesting'}, async ({ page }) => {
  
});

test('Test - 2',{tag : ['@regressiontesting', '@smoketesting']}, async ({ page }) => {
});

test('Test - 3',{tag : '@regressiontesting'}, async ({ page }) => {
  
});

      