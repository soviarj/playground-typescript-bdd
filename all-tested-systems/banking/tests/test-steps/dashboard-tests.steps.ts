import { createBdd } from 'playwright-bdd';
import { DashboardPage } from '../../pages/dashboardPage';
import { expect } from '@playwright/test';


const { When } = createBdd();

When('The user checks total balance and total accounts', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    await expect(dashboard.accountsCount).not.toHaveText('0');
    const balanceText = await dashboard.totalBalance.textContent() || '';
    const accountsText = await dashboard.accountsCount.textContent() || '';
    const balance = Number(
        balanceText.replace('$', '').replace(',', '').trim()
    );
    
    const accounts = Number(accountsText.trim());

    console.log('numbers', balance, accounts);
});