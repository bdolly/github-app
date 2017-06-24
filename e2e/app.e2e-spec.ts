import { Ng2GithubProfileFinderPage } from './app.po';

describe('ng2-github-profile-finder App', () => {
  let page: Ng2GithubProfileFinderPage;

  beforeEach(() => {
    page = new Ng2GithubProfileFinderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
