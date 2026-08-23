import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  await expect(page.locator('#footer')).toContainText('Subscription');
  await page.getByRole('textbox', { name: 'Your email address' }).click();
  await page.getByRole('textbox', { name: 'Your email address' }).fill('abc@def.com');
  await page.locator('#subscribe').click();
  await expect(page.locator('#success-subscribe')).toContainText('You have been successfully subscribed!');
});