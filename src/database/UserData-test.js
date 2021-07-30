import { getOwnedSnippets } from './DatabaseWrapper';

let snips;

export const setSnips = async () => {
  snips = Promise.resolve(getOwnedSnippets('user1'));
  console.log(snips);
};

export default setSnips;
