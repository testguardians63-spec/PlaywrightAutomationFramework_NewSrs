import { expect } from '@playwright/test';

export default class LoginPage {
  constructor(page) { this.page = page; }

  get usernameField() { return this.page.locator('#username'); }
  get passwordField() { return this.page.locator('#password'); }
  get submitButton() { return this.page.locator('#submit'); }

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async isLoaded() {
    await expect(this.usernameField).toBeVisible();
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }
}