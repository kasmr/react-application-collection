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
    if (window.localStorage.length !== 0) {
      const localStorageArray = window.localStorage.getItem('array');
      this.setState({ dadJokes: JSON.parse(localStorageArray) });
    }

    const fetchJokes = await fetch('https://icanhazdadjoke.com/search', {
      headers: { Accept: 'application/json' },
    });

    const { results, current_page } = await fetchJokes.json();

    this.setState({ dadJokes: this.getJokes(results), currPage: current_page });
    window.localStorage.setItem('array', JSON.stringify(dadJokesArray));
  }

  handleNewJokes = async () => {
    const getNewJokes = await fetch(
      `https://icanhazdadjoke.com/search?page=${this.state.currPage + 1}`,
      {
        headers: { Accept: 'application/json' },
      }
    );

    const { results } = await getNewJokes.json();

    this.setState((prevSt) => ({
      dadJokes: this.getJokes(results),
      currPage: prevSt.currPage + 1,
    }));

    window.localStorage.clear();
    window.localStorage.setItem('array', JSON.stringify(dadJokesArray));
  };

  handleScoreChange = (id, delta) => {
    this.setState((prevSt) => ({
      dadJokes: prevSt.dadJokes.map((joke) =>
        joke.id === id ? { ...joke, score: joke.score + delta } : joke
      ),
    }));
  };
  
  
  getJokes(response){
    if(!response?.lenght) {
      console.log("Nothing been returned from server!")
      return [];
      }
    return response.map((item) => ({
      joke: item.joke,
      id: item.id,
      score: 5,
    }))
  }

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
            this.state.dadJokes
              .sort((a, b) => b.score - a.score)
              .map((item) => (
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
