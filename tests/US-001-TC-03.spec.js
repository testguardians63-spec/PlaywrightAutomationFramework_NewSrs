import { test, expect } from '@playwright/test';
import UnknownPage from '../pages/UnknownPage.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const testData = JSON.parse(readFileSync(join(__dirname, '../fixtures/test-data.json'), 'utf8'));

test.describe('Login Page', () => {
  /**
   * @tcId US-001-TC-03
   * @requirement US-001
   * @priority High
   */
  test('US-001-TC-03 - Unsuccessful login using invalid password shows error message', async ({ page }) => {
    // Arrange
    const data = testData['US-001-TC-03'] || {};
    const pom = new UnknownPage(page);

    // Act
    await pom.goto();
    await pom.isLoaded();
    await pom.usernameInput.fill(data.credentialsUsed.username);
    await pom.passwordInput.fill(data.testDataRows[0].testValue);
    await pom.submitButton.click();

    // Assert
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    await expect(pom.errorMessage).toBeVisible();
  });
});