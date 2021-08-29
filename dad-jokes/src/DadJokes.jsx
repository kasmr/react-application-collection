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
    const getJokes = await fetch('https://icanhazdadjoke.com/search?limit=15', {
      headers: { Accept: 'application/json' },
    });

    const { results, current_page } = await getJokes.json();

    this.setState({ dadJokes: results, currPage: current_page });
  }

  handleNewJokes = async () => {
    const getNewJokes = await fetch(
      `https://icanhazdadjoke.com/search?limit=15?page=${this.state.currPage}`,
      {
        headers: { Accept: 'application/json' },
      }
    );

    const { results, current_page } = await getNewJokes.json();

    this.setState({ dadJokes: results, currPage: this.state.currPage + 1 });
  };

  render() {
    return (
      <div className='dad-jokes'>
        <div>
          {' '}
          <button onClick={this.handleNewJokes}>refresh</button>
        </div>
        <div className='dad-jokes list'>
          {this.state.dadJokes.map((item) => (
            <SingleJoke joke={item.joke} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}
