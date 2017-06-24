import { KiPage } from './app.po';

describe('ki App', () => {
  let page: KiPage;

  beforeEach(() => {
    page = new KiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
