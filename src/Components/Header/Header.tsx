import * as React from 'react';

type Props = {
  callback: Function;
};

export function Header(props: Props) {
  return (
    <header className="header">
      <section className="item">
        <button className="primary-color" onClick={() => props.callback()}>Get a New Random Joke</button>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/15Dkatz/official_joke_api">view API Docs</a>
      </section>
      <hr/>
    </header>
  );
}
