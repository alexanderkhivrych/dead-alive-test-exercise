import React, { useState, useEffect } from 'react';
import generateField from '../../utils/generateField';
import updateField from '../../utils/updateField';
import Cell from '../Cell';

import './Field.scss';

const Field: React.FC = () => {
  const [rows, setRows] = useState<boolean[][]>(generateField(50));

  useEffect(() => {
    const interval = setInterval(() => {
      setRows(updateField(rows));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setRows, rows]);

  return (
    <div className="field">
      {rows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="row">
          {row.map((cell, cellIndex) => (
            <Cell key={`cell-${cellIndex}`} isAlive={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Field;
