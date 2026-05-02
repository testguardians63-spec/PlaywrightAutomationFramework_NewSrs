import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const testData = JSON.parse(readFileSync(join(__dirname, '../fixtures/test-data.json'), 'utf8'));

/**
 * @tcId US-001-TC-01
 * @requirement US-001
 * @priority High
 */
test.describe('Login Page', () => {
  test('US-001-TC-01 - User can log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Preconditions: User is on the Login Page
    await loginPage.goto(testData.navigationUrl);
    await expect(loginPage.isLoaded()).toBe(true);

    // Steps
    await loginPage.login(testData.credentialsUsed.username, testData.credentialsUsed.password);

    // Expected
    await expect(page.url()).toContain('/success');
    await expect(page.locator('text=Congratulations')).toBeVisible();
    await expect(page.locator('text=Log out')).toBeVisible();
  });
});