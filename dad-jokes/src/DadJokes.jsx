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

    this.setState({ dadJokes: results, currPage: current_page });
  }

  render() {
    return (
      <div>
        {this.state.dadJokes.map((item) => (
          <SingleJoke joke={item.joke} key={item.id} />
        ))}
      </div>
    );
  }
}
