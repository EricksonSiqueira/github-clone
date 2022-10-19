import React from 'react';
import humps from 'humps';

interface RepositoryInfo {
  svnUrl: string;
  name: string;
  stargazersCount: number;
}

interface HomeProps {
  repos: RepositoryInfo[];
}

interface getServerSidePropsInterface {
  props: HomeProps;
}

export default function Home({ repos }: HomeProps): JSX.Element {
  return (
    <div>
      <h1>Hello world!</h1>
      <ul>
        {repos.map((rep) => (
          <li key={rep.name}>
            <a
              href={rep.svnUrl}
              title={`link para o repositório${rep.name}`}
              target="_blank"
              rel="noreferrer"
            >
              {rep.name}
            </a>
            <span> Estrelas {rep.stargazersCount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(): Promise<getServerSidePropsInterface> {
  const response = await fetch(
    'https://api.github.com/users/ericksonsiqueira/repos'
  );

  const data = await response.json();
  console.log(data);
  const repos = data.map((rep: RepositoryInfo) =>
    humps.camelizeKeys(rep)
  ) as RepositoryInfo[];

  return { props: { repos } };
}
