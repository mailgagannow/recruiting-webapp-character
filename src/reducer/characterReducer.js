import { CLASS_LIST } from '../data/consts';

export const characterReducer = (state, action) => {
  if (action.type === 'COMPUTATION') {
    const attributeState = action.payload.state2;
    const state1 = helperFn(action.payload.state);

    const characterList = Object.keys(attributeState);
    characterList.forEach((classList) => {
      if (
        state1['Strength'] >= CLASS_LIST[classList]['Strength'] &&
        state1['Dexterity'] >= CLASS_LIST[classList]['Dexterity'] &&
        state1['Constitution'] >= CLASS_LIST[classList]['Constitution'] &&
        state1['Intelligence'] >= CLASS_LIST[classList]['Intelligence'] &&
        state1['Wisdom'] >= CLASS_LIST[classList]['Wisdom'] &&
        state1['Charisma'] >= CLASS_LIST[classList]['Charisma']
      ) {
        state = { ...state, [classList]: true };
      } else {
        state = { ...state, [classList]: false };
      }
    });
    console.log(state);
    return state;
  }
};
const helperFn = (arr) => {
  let result = {};
  arr.forEach((val) => {
    result = { ...result, ...val };
  });
  return result;
};
