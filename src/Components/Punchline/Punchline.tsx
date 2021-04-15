import * as React from 'react';

type Props = {
  joke: { id: number, type: string, setup: string, punchline: string };
  visible: boolean;
  setVisible: Function;
  errorMessage: string | null;
};

export function Punchline(props: Props) {

  let showSetup = () => {
    if (props.joke.setup) {
      return (<>
          <blockquote className="blockquote before-blockquote">
            {props.joke.setup}
          </blockquote>
          <button
            className="secondary-color"
            onClick={!!props.joke.setup ? () => props.setVisible(!props.visible) : () => undefined}>
            {!props.visible ? "Show Punchline" : "Hide Punchline"}
          </button>
        </>
      )
    } else {
      return <p className="bold">"LOADING YOUR JOKE..."</p>
    }
  }

  let showPunchline = () => {
    if (props.visible) {
      return (
        <blockquote className="blockquote after-blockquote">
          {props.joke.punchline}
        </blockquote>
      )
    }
  }

  let showJoke = () => {
    if (props.errorMessage) {
      console.error(props.errorMessage);
      return <div className="error-message">THERE WAS AN ERROR LOADING YOUR JOKE.</div>
    } else {
      return (
        <div>
          {showSetup()}
          {showPunchline()}
        </div>
      )
    }
  }

  return showJoke();
}
