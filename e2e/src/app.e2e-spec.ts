import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    // browser.sleep( 10000 );
    expect(page.getParagraphText()).toEqual('Welcome to in!');
  });

  it('should input saban', () => {
    page.getInput().sendKeys( 'saban' );
    browser.sleep( 5000 );
    expect(page.getInputValue()).toEqual('saban');
  });
});
