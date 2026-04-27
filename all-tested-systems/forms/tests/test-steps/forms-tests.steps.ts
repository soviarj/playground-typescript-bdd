import { createBdd } from 'playwright-bdd';
import { test } from '../../../general-helpers/fixtures';
import { FORMS_URL } from '../../../general-helpers/constants';
import { FormsPage } from '../../pages/formsPage';
import { formData } from '../../data/formData';
import { FormsLocators } from '../../pages/formsPageLocators';
import { expect } from '@playwright/test';
import { Field, fieldConfig } from '../../data/enums';


const { Given, When, Then } = createBdd(test);

Given('The user is on the forms page', async ({page})=> {
    await page.goto(FORMS_URL);
});

When('The user submits form with all fields filled with valid data', async ({page})=> {
    const formsPage = new FormsPage(page);
    await formsPage.fillForm(formData);
    await page.waitForTimeout(500); // Wait for form to be processed before submitting
    await page.locator(FormsLocators.submitFormBtn).click();
});

When('The user fills the form with invalid {string} format and submits it', async ({page}, field: Field)=> {
    const formsPage = new FormsPage(page);
    const config = fieldConfig[field];
    await formsPage.fillForm(formData, {[config.key]: config.value(formData)});
    await page.locator(FormsLocators.submitFormBtn).click();
});

When('The user submits empty form', async ({page})=> {
    await page.waitForTimeout(1000); // Wait for form to be fully loaded
    await page.locator(FormsLocators.submitFormBtn).click();
});

When('The user submits form with', async ({page})=> {
    const formsPage = new FormsPage(page);
    await formsPage.fillForm(formData, {email: formData.emailInput.invalid});
    await page.locator(FormsLocators.submitFormBtn).click();
});

Then('The form is submitted successfully', async ({page})=> {
    await expect(page.locator(FormsLocators.successIcon)).toBeVisible();
});

Then('The appropriate error messages are displayed', async ({page})=> {
    await expect.soft(page.locator(FormsLocators.errors.errorFirstName)).toBeVisible({timeout: 2000});
    await expect.soft(page.locator(FormsLocators.errors.errorLastName)).toBeVisible();
    await expect.soft(page.locator(FormsLocators.errors.errorEmail)).toBeVisible();
    await expect.soft(page.locator(FormsLocators.errors.errorPhone)).toBeVisible();
    await expect.soft(page.locator(FormsLocators.errors.errorDob)).toBeVisible();
    await expect.soft(page.locator(FormsLocators.errors.errorGender)).toBeVisible();
    await expect.soft(page.locator(FormsLocators.errors.errorCountry)).toBeVisible();
    await expect.soft(page.locator(FormsLocators.errors.errorCity)).toBeVisible();
    await expect.soft(page.locator(FormsLocators.errors.errorPassword)).toBeVisible();
    await expect.soft(page.locator(FormsLocators.errors.errorConfirmPassword)).toBeVisible();
    await expect.soft(page.locator(FormsLocators.errors.errorTerms)).toBeVisible();
});

Then('The appropriate validation error message is displayed for {string}', async ({page}, field: Field)=> {
    const formsPage = new FormsPage(page);
    const config = fieldConfig[field];
    await expect(page.locator(config.errorLocator)).toBeVisible({timeout: 2000});
});