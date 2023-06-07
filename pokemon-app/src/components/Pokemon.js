import React from 'react';
import { Link } from 'react-router-dom';

export const Pokemon = ({ name }) => {
  return (
    <li>
      <Link to={`/pokemon/${name}`}>{name}</Link></li>
  );
};