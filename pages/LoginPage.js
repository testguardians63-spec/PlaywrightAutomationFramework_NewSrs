import { expect } from '@playwright/test';

export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

  get username() { return this.page.locator('#username'); }
  get password() { return this.page.locator('#password'); }
  get usertype() { return this.page.locator('#usertype'); }
  get terms() { return this.page.locator('#terms'); }
  get signInBtn() { return this.page.locator('#signInBtn'); }
  get cancelBtn() { return this.page.locator('#cancelBtn'); }
  get okayBtn() { return this.page.locator('#okayBtn'); }
  get errorMessage() { return this.page.locator('#error'); }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  }

  async isLoaded() {
    await expect(this.signInBtn).toBeVisible();
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.signInBtn.click();
  }
}