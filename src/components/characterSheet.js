import React, { useEffect, useReducer, useState } from 'react';
import { ATTRIBUTE_LIST, CLASS_LIST } from '../data/consts';
import { attributeReducer } from '../reducer/attributeReducer';
import { characterReducer } from '../reducer/characterReducer';
import AttributesModifier from './attributeModifier';
import CharacterDetails from './characterDetails';

const CharacterSheet = () => {
  const [characters, setCharacters] = useState('Bard');
  const initState = ATTRIBUTE_LIST.map((value) => {
    return {
      [value]: 10,
    };
  });

  let charState = {};
  Object.keys(CLASS_LIST).forEach((val) => {
    charState = { ...charState, [val]: false };
  });
  const [state, dispatch] = useReducer(attributeReducer, initState);

  const [state2, dispatch2] = useReducer(characterReducer, charState);
  // compute matching character
  useEffect(() => {
    // computation when attributes change
    // computation state: {barbarian: true, wizard: true, bard: true}
    dispatch2({
      type: 'COMPUTATION',
      payload: { state2, state },
    });
  }, [state]);
  return (
    <div>
      {Object.keys(CLASS_LIST).map((value) => (
        <div
          key={value}
          onMouseOver={() => setCharacters(value)}
          className={state2[value] ? 'match display' : 'display'}
        >
          {value}
        </div>
      ))}
      <div>{<CharacterDetails character={CLASS_LIST[characters]} />}</div>
      {state.map((skill, index) => {
        let key = Object.keys(skill);
        let value = Object.values(skill);
        return (
          <AttributesModifier
            key={index}
            index={index}
            name={key[0]}
            value={value[0]}
            increment={() =>
              dispatch({
                type: 'INCREMENT',
                payload: { value: key[0] },
              })
            }
            decrement={() =>
              dispatch({
                type: 'DECREMENT',
                payload: { value: key[0] },
              })
            }
          />
        );
      })}
    </div>
  );
};

export default CharacterSheet;
