import React, { Component } from 'react';
import { randomWord } from './words';
import './Hangman.css';
import img0 from './assets/0.jpg';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split('')
      .map((ltr) => (this.state.guessed.has(ltr) ? ltr : '_'));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map((ltr) => (
      <button
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        key={ltr}
      >
        {ltr}
      </button>
    ));
  }

  handleRestart() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() });
  }

  /** render: render game */
  render() {
    console.log();

    // [...this.state.guessed].includes(this.state.answer)
    if (this.props.maxWrong === this.state.nWrong) {
      return (
        <div className='Hangman'>
          <h1>The word was:</h1>
          <p className='Hangman-word'>{this.state.answer}</p>
          <h2>You are dead !</h2>
          <button className='restart-btn' onClick={this.handleRestart}>
            Restart the game
          </button>
          <img alt='6/6' src={this.props.images[this.state.nWrong]} />
        </div>
      );
    }
    return (
      <div className='Hangman'>
        <h1>Hangman Game</h1>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        {this.state.guessed}
        {this.guessedWord().join('') === this.state.answer ? (
          <h2>You Win !</h2>
        ) : (
          <p className='Hangman-btns'>{this.generateButtons()}</p>
        )}
        <img
          alt={`${this.state.nWrong} / 6`}
          src={this.props.images[this.state.nWrong]}
        />
        <p>Wrong guesses: {this.state.nWrong} </p>
      </div>
    );
  }
}

export default Hangman;
