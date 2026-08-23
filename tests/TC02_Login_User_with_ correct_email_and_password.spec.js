import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('TestUser230820261350@gmail.com');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('12345');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Logged in as TestUser')).toBeVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await expect(page.getByText('Account Deleted!')).toBeVisible();
});