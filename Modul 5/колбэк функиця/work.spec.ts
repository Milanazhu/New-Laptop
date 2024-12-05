const { test, expect } = require('@playwright/test');

test.describe('Automatic configuration selection', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https:'); 
  });
  test('Car', async ({ page }) => {
    await page.fill('car');  // подставить проезд машины
    await page.click('#start-button');  // "Старт" клик
    await page.waitForURL('ride.page');  // переход на райд пейдж где в урл дефолт 
    expect(page.waitForURL('ride.page')).toBe('урл с дефолтом');
  });
  test('Truck', async ({ page }) => {
    await page.fill(подствить трак);  // грузовик
    await page.click('#start-button');  // старт
    await page.waitForURL('ride.page');  // Проверяем, что мы на второй странице
    expect(page.waitForURL('ride.page')).toBe('урл с дефолтом');
  });
  test('robot', async ({ page }) => {
    await page.fill('подсталяем проезд робота');  // Локатор инпута для ввода транспорта
    await page.click('#start-button');  // старт
    await page.waitForURL('ride.page');  // Проверяем, что мы на второй странице
    expect(page.waitForURL('ride.page')).toBe('урл с дефолтом');
  });
});