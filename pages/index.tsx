import React, { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
  const [repositories, setRepositories] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ericksonsiqueira/repos')
      .then(async (res) => await res.json())
      .then((data) => {
        const repNames = data.map((rep) => rep.name);

        setRepositories(repNames);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Hello world!</h1>

      <ul>
        {repositories.map((rep) => (
          <li key={rep}>{rep}</li>
        ))}
      </ul>
    </div>
  );
}
