import React from 'react';

const CharacterDetails = (props) => {
  const { character } = props;
  return (
    <div>
      <ul>
        {Object.entries(character).map(([attribute, value]) => (
          <li key={attribute}>
            {attribute}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetails;
