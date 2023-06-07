import React from 'react';
import { Link } from 'react-router-dom';

export const Pokemon = ({ name, onClick }) => {
  
  return (
    <li>
      <Link onClick={onClick} to={`/pokemon/${name}`} style={{
                    color: '#fff', 
                    textDecoration: 'none',
                  }}>{name}</Link> 
    </li>
  );
};