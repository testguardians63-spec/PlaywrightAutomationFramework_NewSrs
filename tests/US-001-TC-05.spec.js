iimport { test, expect } from '@playwright/test';
import UnknownPage from '../pages/UnknownPage.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const testData = JSON.parse(readFileSync(join(__dirname, '../fixtures/test-data.json'), 'utf8'));

test.describe('Login Page', () => {
  /**
   * @tcId US-001-TC-05
   * @requirement US-001
   * @priority Medium
   */
  test('US-001-TC-05 - Boundary test for username length (maximum)', async ({ page }) => {
    // Arrange
    const data = testData['US-001-TC-05'] || {};
    const pom = new UnknownPage(page);

    // Act
    await pom.goto();
    await pom.isLoaded();
    await pom.usernameInput.fill('a'.repeat(500));
    await pom.passwordInput.fill(data.credentialsUsed.password);
    await pom.submitButton.click();

    // Assert
    await expect(pom.errorMessage).toBeVisible();
  });
});