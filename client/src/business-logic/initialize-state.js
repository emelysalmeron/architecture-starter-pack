// keep this file!  it works, and you will need it

import { load } from '../data-access/load.js';

export const initializeState = async (pathToData = '', meta = { url: '' }) => {
  await load(pathToData, meta);
};
