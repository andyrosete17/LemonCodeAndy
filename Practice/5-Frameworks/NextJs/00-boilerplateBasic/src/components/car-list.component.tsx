import React from 'react';
import {root} from './car-list.styles';

export const CarListComponent: React.FunctionComponent = (props) => {
  return (
    <ul className={root}>
      <li>Audi Q8</li>
      <li>BMW X7</li>
    </ul>
  );
};