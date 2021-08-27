import React, { Component } from 'react';

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckId: '',
      cardsOnDeck: [],
    };
  }
  async componentDidMount() {
    const getId = await fetch(
      'https://www.deckofcardsapi.com/api/deck/new/shuffle'
    );

    const { deck_id } = await getId.json();

    this.setState({ deckId: deck_id });
  }

  getNewCardForDeck = async () => {
    try {
      const getNewCard = await fetch(
        `https://www.deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`
      );

      const { cards, success } = await getNewCard.json();
      if (!success) {
        throw new Error('No card left!');
      }
      this.setState((prevState) => {
        return {
          cardsOnDeck: [...prevState.cardsOnDeck, cards[0]],
        };
      });
    } catch (error) {
      alert(error);
      const shuffleDeck = await fetch(
        `https://www.deckofcardsapi.com/api/deck/${this.state.deckId}/shuffle/`
      );

      const data = await shuffleDeck.json();
      this.setState({ cardsOnDeck: [], deckId: data.deck_id });
    }
  };

  render() {
    return (
      <div className='deck'>
        <button onClick={this.getNewCardForDeck}>Get a card</button>
        <div className='deck-row'>
          {this.state.cardsOnDeck.map((card) => (
            <img
              style={{
                position: 'absolute',
                transform: `rotate(${Math.floor(
                  Math.random() * 360
                )}deg) translate(${Math.floor(
                  Math.random() * 15
                )}px, ${Math.floor(Math.random() * 15)}px)`,
              }}
              src={card.image}
              alt={card.value + card.suit}
              key={card.code}
            ></img>
          ))}
        </div>
      </div>
    );
  }
}
