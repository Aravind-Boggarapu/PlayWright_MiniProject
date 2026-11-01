import { test, expect, Locator, Page } from '@playwright/test';
import { DataGenerator } from '../utils/datagenerator';

export class RegistrationFlow {
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly telephone: Locator;
    private readonly password: Locator;
    private readonly passwordConfirm: Locator;
    private readonly privacyPolicy: Locator;
    private readonly continueButton: Locator;
    private readonly registrationtext: Locator;
    private readonly registrtionmessagesuccess: Locator;

    constructor(page: Page) {
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.email = page.getByPlaceholder('E-Mail');
        this.telephone = page.getByPlaceholder('Telephone');
        this.password = page.getByPlaceholder('Password', { exact: true });
        this.passwordConfirm = page.getByPlaceholder('Password Confirm');
        this.privacyPolicy = page.locator('input[type="checkbox"]');
        this.continueButton = page.locator('input[type="submit"]');
        this.registrationtext = page.getByText('Your Personal Details');
        this.registrtionmessagesuccess = page.getByText('Congratulations! Your new account has been successfully created!');
    }

    public async registrationpageVerification(): Promise<boolean> {
        const registrtaionText = this.registrationtext;
        await expect(registrtaionText).toBeVisible();
        return true;
    }

    public async registartiondetailsFill(): Promise<void> {
        await this.firstName.fill(DataGenerator.getFirstName());
        await this.lastName.fill(DataGenerator.getLastName());
        await this.email.fill(DataGenerator.getEmail());
        await this.telephone.fill(DataGenerator.getTelephone());

        const passworddetails = DataGenerator.generateInvalidLoginPayload();
        await this.password.fill(passworddetails.password);
        await this.passwordConfirm.fill(passworddetails.password);
        await this.privacyPolicy.check();

        await expect(this.privacyPolicy).toBeChecked();
        await this.continueButton.click();

        await expect(this.registrtionmessagesuccess).toBeVisible();
    }
}