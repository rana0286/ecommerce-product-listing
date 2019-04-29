import { copy } from '../constants';

/**
 * @description This finction provide copy for provided key.
 * Currently it is very simple but as per our use case we can extend this to support localization
 * @key : json object key
 */

const copyProvider = (key = '') => copy[key];

export default copyProvider;
