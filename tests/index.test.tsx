import { screen, render } from '@testing-library/react';
import React from 'react';
import Main, { RepositoryInfo } from '../pages';

const mockedRepos = {
  repos: [] as RepositoryInfo[],
};

describe('Teste 1', () => {
  render(<Main {...mockedRepos} />);

  expect(screen.getByRole('heading', { level: 1, name: 'Hello world!' }));
});
