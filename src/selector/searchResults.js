import { get } from 'lodash';

export const getSearchResults = store => get(store, ['searchResults'], null);