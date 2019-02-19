import React from 'react';

export const GuitarString = function({ notes }) {
  return (
    <ul className="string">
      {notes.map(function(note, i) {
        return (
          <li className="fret" key={i}>
            <button className="fret__button">{note}</button>
          </li>
        );
      })}
    </ul>
  );
};
