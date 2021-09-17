import React, { useState, useEffect } from 'react';

const Select = () => {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovie();
  }, [number]);

  const fetchMovie = async () => {
    const res = await fetch(`https://swapi.dev/api/films/${number}`);
    const data = await res.json();

    setMovie(data);
  };

  return (
    <div>
      <h1>Choose Star Wars movie</h1>
      <h2>{movie.title}</h2>
      <p>{movie.opening_crawl}</p>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
      </select>
    </div>
  );
};

export default Select;
