import React, { useEffect, useState } from 'react';
import humps from 'humps';

interface RepositoryInfo {
  svnUrl: string;
  name: string;
}

export default function Home(): JSX.Element {
  const [repositories, setRepositories] = useState<RepositoryInfo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ericksonsiqueira/repos')
      .then(async (res) => await res.json())
      .then((data) => {
        const repNames = data.map((rep) =>
          humps.camelizeKeys(rep)
        ) as RepositoryInfo[];

        setRepositories(repNames);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(repositories);

  return (
    <div>
      <h1>Hello world!</h1>
      <ul>
        {repositories.map((rep) => (
          <li key={rep.name}>
            <a
              href={rep.svnUrl}
              title={`link para o repositório${rep.name}`}
              target="_blank"
              rel="noreferrer"
            >
              {rep.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
