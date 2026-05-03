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
   * @priority TODO
   */
  test('US-001-TC-04 - Successful login Navigates to new page(new page URL contains practicetestautomation.com/logged-in-successfully/) to show Log out button and expected text ('Congratulations' or 'successfully logged in') to be displayed', async ({ page }) => {
    const data = testData['US-001-TC-04'] || {};
    const pom = new LoginPage(page);

    await pom.goto();
    await pom.isLoaded();

    await pom.login(data.username, data.password);
    await expect(page).toHaveURL(/logged-in-successfully/);
  });
});