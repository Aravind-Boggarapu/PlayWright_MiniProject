import { test as base, expect , Page} from '@playwright/test';
import { RegistrationFlow } from '../pages/RegistrationFlow';

import dotenv from 'dotenv';
import path from 'path';

const { error } = dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});
if (error) throw error;

const webAppUrl = process.env.WEB_APP_URL?.trim();
if (!webAppUrl) {
  throw new Error('WEB_APP_URL is missing from .env');
}

type LoginFixture = {
  Login: Page,
  registration: RegistrationFlow;
};

export const test = base.extend<LoginFixture>(
    
    {
  Login: async ({ page }, use) => {

await page.goto(webAppUrl);

await page.getByText('My Account').first().click();
await page.getByText('Register').click();
await expect(page.getByRole('heading',{name:'Account', exact: true})).toBeVisible();

    await use(page);
  },

  registration: async ({ page }, use) => {
    await use(new RegistrationFlow(page));
  },

});

export { expect } from '@playwright/test';

