import React, { Component } from 'react';

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsOnDeck: [],
    };
  }
  async componentDidMount() {
    const getId = await fetch(
      'https://www.deckofcardsapi.com/api/deck/new/shuffle'
    );

    const { deck_id } = await getId.json();

    const getCard = await fetch(
      `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    );

    const { cards } = await getCard.json();

    this.setState({ cardsOnDeck: cards });
  }

  render() {
    return (
      <div>
        {this.state.cardsOnDeck.map((card) => (
          <img
            src={card.image}
            alt={card.value + card.suit}
            key={card.code}
          ></img>
        ))}
        <button>Get another card</button>
      </div>
    );
  }
}
