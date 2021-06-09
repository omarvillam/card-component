import { createClient } from 'contentful';
import { ICard, ICardFields } from './contentful-types';

const accessToken = 'SLwcKpqAlCqPldXRHpODgqIyFCrR7K9po4hrlwLiToQ';
const space = 'xbkzr5hsezlf';

const client = createClient({
  accessToken,
  space,
});

export function getCards() {
  return client.getEntries<ICardFields>();
}
