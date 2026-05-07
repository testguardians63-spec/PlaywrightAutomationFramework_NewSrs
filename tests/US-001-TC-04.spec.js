import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const testData = JSON.parse(readFileSync(join(__dirname, '../fixtures/test-data.json'), 'utf8'));

test.describe('Login Page', () => {
  /**
   * @tcId US-001-TC-04
   * @requirement US-001
   * @priority Medium
   */
  test('US-001-TC-04 - Boundary test for username length', async ({ page }) => {
    // Arrange
    const data = testData['US-001-TC-04'] || {};
    const pom = new LoginPage(page);

    // Act
    await pom.goto();
    await pom.isLoaded();
    await pom.usernameInput.fill(data.testDataRows[0].testValue);
    await pom.passwordInput.fill(data.credentialsUsed.password);
    await pom.signInBtn.click();

    // Assert
    await expect(pom.errorMessage).toBeVisible();
  });
});