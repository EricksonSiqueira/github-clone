import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [repositories, setRepositories] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ericksonsiqueira/repos')
      .then((res) => res.json())
      .then((data) => {
        const repNames = data.map((rep) => rep.name);

        setRepositories(repNames);
      });
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
