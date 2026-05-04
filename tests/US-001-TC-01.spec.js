import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

test.describe('Login Page', () => {
  /**
   * @tcId US-001-TC-01
   * @requirement US-001
   * @priority High
   */
  test('US-001-TC-01 - User can log in with valid credentials', async ({ page }) => {
    // Arrange
    const pom = new LoginPage(page);

    // Act
    await pom.goto();
    await pom.isLoaded();
    await pom.usernameInput.fill('validusername');
    await pom.passwordInput.fill('password123');
    await pom.submitButton.click();

    // Assert
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(pom.errorMessage).not.toBeVisible();
  });
});