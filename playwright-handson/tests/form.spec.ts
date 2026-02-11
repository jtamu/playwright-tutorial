import { test, expect } from '@playwright/test';

test('フォーム画面へ遷移', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'フォーム' }).click();

  await expect(page).toHaveURL('http://localhost:3000/form');
  await expect(page.getByRole('heading', { name: '入力フォーム' })).toBeVisible();
});

test('フォーム操作のテスト', async ({ page }) => {
  await page.goto('http://localhost:3000/form');
  await page.getByRole('textbox', { name: /一人目/ }).fill('太郎');
  await page.getByRole('textbox', { name: /二人目/ }).fill('花子');
  await page.getByRole('button', { name: /シャッフル/ }).click();
  await expect(page.getByRole('status', { name: /結果/})).toHaveText(/(太郎→花子)|(花子→太郎)/);
});
