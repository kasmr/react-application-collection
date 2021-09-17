import React from 'react';
import useToggle from '../hooks/useToggle';

const Toggler = () => {
  const [happy, toggleHappy] = useToggle(false);
  const [sad, toggleSad] = useToggle(false);

  return (
    <div className='toggler'>
      <h1 onClick={toggleHappy}>{happy ? '😀!' : '🤨'}</h1>
      <h1 onClick={toggleSad}>{sad ? '😩' : '😺'}</h1>
    </div>
  );
};

export default Toggler;
