import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { AccountsPage } from '../../pages/accountsPage';
import { AccountType, mandatoryFields } from '../../helpers/enums';
import { test } from '../../helpers/fixtures';
import { DashboardPage } from '../../pages/dashboardPage';
import { MenuPage } from '../../pages/menuPage';
import { AccountsLocators } from '../../pages/accountsPageLocators';

const { When, Then } = createBdd(test);

When('The user clicks {string} button on the accounts page', async ({page}, button: keyof typeof AccountsLocators.updateAccountButtons)=> {
    const accounts = new AccountsPage(page)
    const btn = accounts.getButton(button);
    await btn.click();
});

When('The user updates account name', async ({page})=> {
    const accounts = new AccountsPage(page)
    await page.locator(AccountsLocators.accountNameInput).fill('Updated Account Name')
    await page.keyboard.press('Enter')
});

let accNo: string;

When('The user checks the account number of an account he wants to delete', async ({page, contextData})=> {
    const accounts = new AccountsPage(page)
    contextData.accNo = await page.locator(AccountsLocators.accountNumber).first().innerText();
});

When('The user checks number of accounts listed on the page', async ({page, contextData})=> {
    const accounts = new AccountsPage(page)
    contextData.listedAcc = await page.locator(AccountsLocators.filteredAccounsSummary).textContent() || '';
});

When('The user selects {string} account type', async ({ page }, accType: string ) => {
    const accounts = new AccountsPage(page);
    await accounts.selectAccountType(accType);
});

When('The user resets filter', async ({ page }) => {
    const accounts = new AccountsPage(page);
    await page.locator(AccountsLocators.resetAccountsFilter).click();
});

When('The user saves the form for {string} Account type with mandatory fields filled in', async ({ page }, type: keyof typeof mandatoryFields) => {
    const accounts = new AccountsPage(page);
    await accounts.fillMandatoryFields(type);
    await page.locator(AccountsLocators.saveAccountButton).click();
});

When('The user tries to save the form only with optional fields filled in', async ({ page }) => {
    const accounts = new AccountsPage(page);
    await page.locator(AccountsLocators.inactiveStatus).click();
    await page.locator(AccountsLocators.overdraftCheckbox).click();
    await page.locator(AccountsLocators.saveAccountButton).click();
});

When('The user creates all account types', async ({ page }) => {
    const accounts = new AccountsPage(page);
    const dashboard = new DashboardPage(page);
    const menu = new MenuPage(page)

    const types = Object.keys(mandatoryFields) as (keyof typeof mandatoryFields)[];

    for (const type of types) {
        await menu.dashboardButton.click();
        const btn = dashboard.getButton('ADD_ACCOUNT');
        await btn.click();
        await accounts.fillMandatoryFields(type);
        await page.locator(AccountsLocators.saveAccountButton).click();
        await page.waitForTimeout(300)
    }
});

Then('The new {string} account is created', async ({ page }, type: keyof typeof mandatoryFields) => {
    const accounts = new AccountsPage(page);
    const data = mandatoryFields[type];
    await expect(page.locator(AccountsLocators.successAccountMessage)).toBeVisible();
    const account = page.locator(AccountsLocators.accountTitle).filter({ hasText: data.accountName });
    await expect(account).toHaveCount(1);
});

Then('The system writes error messages under the empty mandatory fields', async ({ page }) => {
    const accounts = new AccountsPage(page);
    await expect(page.locator(AccountsLocators.errorMessageAccountName)).toBeVisible();
    await expect(page.locator(AccountsLocators.errorMessageAccountType)).toBeVisible();
    await expect(page.locator(AccountsLocators.errorMessageValidBalance)).toBeVisible();
});

Then('The account is upated', async ({page})=> {
    const accounts = new AccountsPage(page)
    await expect(page.locator(AccountsLocators.successAccountMessage)).toBeVisible()
    const account = page.locator(AccountsLocators.accountTitle).filter({ hasText: 'Updated Account Name' });
    await expect(account).toHaveCount(1);
    
});

Then('The account is deleted', async ({page, contextData})=> {
    const accounts = new AccountsPage(page)
    await expect(page.locator(AccountsLocators.successAccountMessage)).toBeVisible({timeout : 2000});
    await expect(page.locator(AccountsLocators.successAccountMessage)).toBeHidden({timeout : 10000});
    await expect(page.locator(AccountsLocators.accountNumber).filter({ hasText: contextData.accNo })).toHaveCount(0);
});

Then('All account types are listed', async ({page, contextData})=> {
    const accounts = new AccountsPage(page)
    const numberOfListedAccounts = await page.locator(AccountsLocators.filteredAccounsSummary).textContent() || '';
    expect(contextData.listedAcc).toEqual(numberOfListedAccounts);
});

Then('The user verifies that only {string} account types are visible', async ({ page }, accType: AccountType ) => {
    const accounts = new AccountsPage(page);
    await accounts.verifyOtherAccountTypesNotVisible(accType);
    const accountChips = accounts.getAccountType(accType)
    const accountType = page.locator(AccountsLocators.typeChips).getByText(accountChips);
    const count = await accountType.count();
    expect(count).toBeGreaterThan(0);
});