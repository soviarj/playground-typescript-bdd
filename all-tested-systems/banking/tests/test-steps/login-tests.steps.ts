import { createBdd } from 'playwright-bdd';
import { BANK_URL } from "../../../general-helpers/constants";
import { users } from "../../helpers/userMap";
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { DashboardPage } from '../../pages/dashboardPage';
import { MenuPage } from '../../pages/menuPage';
import { AccountsPage } from '../../pages/accountsPage';
import { AccountsLocators } from '../../pages/accountsPageLocators';

const { Given, When, Then } = createBdd();

Given('The user is navigated to the bank homepage', async ({page})=> {
    const login = new LoginPage(page)
    await login.navigateToLogingPage(BANK_URL);
    await expect(login.loginButton).toBeVisible()
});

Given('The {string} is logged in the banking system', async ({page}, userKey: keyof typeof users)=> {
    const login = new LoginPage(page)
    await login.navigateToLogingPage(BANK_URL);
    const user = users[userKey];
    await login.fillUserCredentials(user.username, user.password);
    await login.loginButton.click();
});

When('{string} fills Credentials', async ({ page }, userKey: keyof typeof users) => {
    const login = new LoginPage(page);
    const user = users[userKey];
    await login.fillUserCredentials(user.username, user.password);
});

When('The user clicks {string} button', async ({page}, button: string)=> {
    const login = new LoginPage(page)
    const btn = login.getButton(button);
    await btn.click();
});

When('The user presses {string} key', async ({page}, key: string)=> {
    const login = new LoginPage(page)
    await page.keyboard.press(key);
});

Then('The user is redirected to the bank dashboard', async ({page})=> {
    const dashboard = new DashboardPage(page)
    await expect(dashboard.totalBalance).toBeVisible()
});

Then('The Read-Only user can see the viewer badge and correct role indicator', async ({page})=> {
    const menu = new MenuPage(page)
    await expect(menu.viewrBadge).toContainText('Read-only')
    await expect(menu.roleIndicator).toContainText('Read-only Viewer')
});

Then('The system generates an error alert', async ({page})=> {
    const login = new LoginPage(page)
    await expect(login.loginAlert).toContainText('Invalid username or password. Please try again.')
});

Then('The password field type is {string}', async ({ page }, type: string) => {
    const login = new LoginPage(page);
    await expect(login.passInput).toHaveAttribute('type', type);
});

Then('The Read-Only user cannot see Edit and Delete Accounts buttons', async ({page})=> {
    const accounts = new AccountsPage(page)
    await expect(page.locator(AccountsLocators.updateAccountButtons.EDIT)).not.toBeVisible()
    await expect(page.locator(AccountsLocators.updateAccountButtons.DELETE)).not.toBeVisible()
});