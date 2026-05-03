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
   * @priority High
   */
  test('US-001-TC-04 - Successful login Navigates to new page(new page URL contains practicetestautomation.com/logged-in-successfully/) to show Log out button and expected text ('Congratulations' or 'successfully logged in') to be displayed', async ({ page }) => {
    // Arrange
    const data = testData['US-001-TC-04'] || {};
    const pom = new UnknownPage(page);

    // Act
    await pom.goto();
    await pom.isLoaded();
    await pom.login(data.username, data.password);

    // Assert
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(page.locator('//button[text()="Log out"]')).toBeVisible();
    await expect(page.locator('//p[contains(text(), "Congratulations")]')).or(expect(page.locator('//p[contains(text(), "successfully logged in")]'))).toBeVisible();
  });
});