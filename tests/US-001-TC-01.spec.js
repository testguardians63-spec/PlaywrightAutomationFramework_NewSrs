import { test, expect } from '@playwright/test';
import UnknownPage from '../pages/UnknownPage.js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const testData = JSON.parse(readFileSync(join(__dirname, '../fixtures/test-data.json'), 'utf8'));

test.describe('Login Page', () => {
  /**
   * @tcId US-001-TC-01
   * @requirement US-001
   * @priority High
   */
  test('US-001-TC-01 - User can log in with valid credentials', async ({ page }) => {
    // Arrange
    const data = testData['US-001-TC-01'] || {};
    const pom = new UnknownPage(page);

    // Act
    await pom.goto();
    await pom.isLoaded();
    await pom.login(data.credentialsUsed.username, data.credentialsUsed.password);

    // Assert
    await expect(page).toHaveURL('/success-url');
    await expect(pom.getWelcomeMessage()).toBeVisible();
  });
});