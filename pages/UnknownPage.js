import { expect } from '@playwright/test';

export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

  get skipToContentLink() { return this.page.locator('a[href="#main-container"]'); }
  get homeLink() { return this.page.locator('a[href="https://practicetestautomation.com/"]'); }
  get practiceLink() { return this.page.locator('a[href="https://practicetestautomation.com/practice/"]'); }
  get coursesLink() { return this.page.locator('a[href="https://practicetestautomation.com/courses/"]'); }
  get blogLink() { return this.page.locator('a[href="https://practicetestautomation.com/blog/"]'); }
  get contactLink() { return this.page.locator('a[href="https://practicetestautomation.com/contact/"]'); }
  get privacyPolicyLink() { return this.page.locator('a[href="https://practicetestautomation.com/privacy-policy/"]'); }
  get usernameInput() { return this.page.locator('username'); }
  get passwordInput() { return this.page.locator('#password'); }
  get toggleNavigationButton() { return this.page.locator('#toggle-navigation'); }
  get submitButton() { return this.page.locator('#submit'); }
  get errorMessage() { return this.page.locator('#error'); }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async isLoaded() {
    await expect(this.skipToContentLink).toBeVisible();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
