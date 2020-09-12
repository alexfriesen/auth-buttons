import { newE2EPage } from '@stencil/core/testing';

describe('auth-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<auth-button></auth-button>');
    const element = await page.find('auth-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<auth-button></auth-button>');
    const component = await page.find('auth-button');
    const element = await page.find('auth-button >>> button');
    expect(element.textContent).toEqual(`Sign In with`);

    component.setProperty('src-icon', 'test.png');
    await page.waitForChanges();
    expect(element.iconSrc).toEqual(`test.png`);
  });
});
