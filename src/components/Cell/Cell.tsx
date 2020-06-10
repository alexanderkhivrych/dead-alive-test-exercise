import React from 'react';

import './Cell.scss';

type Props = {
  isAlive?: boolean;
};

const Cell: React.FC<Props> = ({ isAlive }) => <div className={`cell cell--${isAlive ? 'alive' : 'dead'}`} />;

export default Cell;
