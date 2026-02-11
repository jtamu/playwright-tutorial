import { test, expect } from '@playwright/test';

test('ページ表示のテスト', async ({page}) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Playwright Hands-On/);
    await expect(page.getByRole('heading')).toHaveText(/Playwright Hands-On/);
    await expect(page.getByRole('button', { name: 'Click me' })).toBeVisible();
});
