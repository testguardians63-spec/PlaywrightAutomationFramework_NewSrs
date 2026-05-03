import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const testData = JSON.parse(readFileSync(join(__dirname, '../fixtures/test-data.json'), 'utf8'));

/**
 * @tcId US-001-TC-02
 * @requirement US-001
 * @priority High
 */
test.describe('Login Page', () => {
  test('US-001-TC-02 - Unsuccessful login using invalid username shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Preconditions: User is on the Login Page
    await loginPage.goto();
    await expect(loginPage.usernameInput).toBeVisible();

    // Steps
    await loginPage.login(testData['US-001-TC-02'].rows[0].testValue, testData['US-001-TC-02'].rows[1].testValue);

    // Expected: Error message 'Your username is invalid!' is displayed below the Username field.
    await expect(loginPage.getUsernameErrorMessage()).toBe('Your username is invalid!');
  });
});