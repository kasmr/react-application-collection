import React, { Component } from 'react';
import SingleJoke from './SingleJoke';

export default class DadJokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadJokes: [],
      currPage: null,
    };
  }

  async componentDidMount() {
    const getJokes = await fetch('https://icanhazdadjoke.com/search', {
      headers: { Accept: 'application/json' },
    });

    const { results, current_page } = await getJokes.json();

    const dadJokesArray = results.map((item) => ({
      joke: item.joke,
      id: item.id,
      score: 5,
    }));

    this.setState({ dadJokes: dadJokesArray, currPage: current_page });
  }

  handleNewJokes = async () => {
    const getNewJokes = await fetch(
      `https://icanhazdadjoke.com/search?page=${this.state.currPage + 1}`,
      {
        headers: { Accept: 'application/json' },
      }
    );

    const { results } = await getNewJokes.json();

    const dadJokesArray = results.map((item) => ({
      joke: item.joke,
      id: item.id,
      score: 5,
    }));

    this.setState((prevSt) => ({
      dadJokes: dadJokesArray,
      currPage: prevSt.currPage + 1,
    }));
  };

  handleScoreChange = (id, delta) => {
    this.setState((prevSt) => ({
      dadJokes: prevSt.dadJokes.map((joke) =>
        joke.id === id ? { ...joke, score: joke.score + delta } : joke
      ),
    }));
  };

  render() {
    return (
      <div className='dad-jokes'>
        <div className='refresh'>
          <i className='fas fa-sync' onClick={this.handleNewJokes} />
        </div>
        <div className='dad-jokes list'>
          {this.state.dadJokes.length === 0 ? (
            <h1>There is no any jokes left</h1>
          ) : (
            this.state.dadJokes.map((item) => (
              <SingleJoke
                joke={item.joke}
                id={item.id}
                score={item.score}
                key={item.id}
                handleScoreChange={this.handleScoreChange}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}
