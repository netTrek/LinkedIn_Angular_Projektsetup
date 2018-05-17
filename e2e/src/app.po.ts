import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('in-root h1')).getText();
  }

  getInput() {
    return element(by.css('in-root input'));
  }

  getInputValue() {
    return this.getInput().getAttribute('value');
  }
}
