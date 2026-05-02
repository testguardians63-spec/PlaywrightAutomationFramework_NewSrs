import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const testData = JSON.parse(readFileSync(join(__dirname, '../fixtures/test-data.json'), 'utf8'));

/**
 * @tcId US-001-TC-03
 * @requirement US-001
 * @priority High
 */
test.describe('Login Page', () => {
  test('US-001-TC-03 - Unsuccessful login using invalid password shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Preconditions: User is on the Login Page
    await loginPage.goto();
    await expect(loginPage.isLoaded()).toBe(true);

    // Steps
    await loginPage.login(testData['US-001-TC-03'].testDataRows[0].testValue, testData['US-001-TC-03'].testDataRows[1].testValue);

    // Expected: Error message 'Your password is invalid!' is displayed below the Password field.
    await expect(loginPage.getErrorMessage()).toBe('Your password is invalid!');
  });
});