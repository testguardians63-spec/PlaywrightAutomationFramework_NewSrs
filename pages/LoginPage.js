import { expect } from '@playwright/test';

export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

  get divAlert() { return this.page.locator('.alert-danger'); }
  get usernameInput() { return this.page.locator('#username'); }
  get passwordInput() { return this.page.locator('#password'); }
  get userTypeInput() { return this.page.locator('#usertype'); }
  get termsCheckbox() { return this.page.locator('#terms'); }
  get signInBtn() { return this.page.locator('#signInBtn'); }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  }

  async isLoaded() {
    await expect(this.divAlert).toBeVisible();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInBtn.click();
  }
}