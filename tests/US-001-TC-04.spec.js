import { test, expect } from '@playwright/test';
import UnknownPage from '../pages/UnknownPage.js';
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
  test('US-001-TC-04 - Boundary test for username length (minimum)', async ({ page }) => {
    // Arrange
    const data = testData['US-001-TC-04'] || {};
    const pom = new UnknownPage(page);

    // Act
    await pom.goto();
    await pom.isLoaded();
    await pom.login('a', 'Password123');

    // Assert
    await expect(pom.errorMessage).toBeVisible();
  });
});