import { GaugeStudioPage } from './app.po';

describe('gauge-studio App', () => {
  let page: GaugeStudioPage;

  beforeEach(() => {
    page = new GaugeStudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
