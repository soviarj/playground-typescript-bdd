import { createBdd } from 'playwright-bdd';
import { MenuPage } from '../../pages/menuPage';
import { DashboardPage } from '../../pages/dashboardPage';


const { When } = createBdd();

When('The user is navigated to the {string} Page', async ({page}, button: string)=> {
    const menu = new MenuPage(page)
    await menu.clickOnMenuButton(button);
});

When('The user clicks {string} button on the dashboard page', async ({page}, button: string)=> {
    const dashboard = new DashboardPage(page)
    const btn = dashboard.getButton(button);
    await btn.click();
});
