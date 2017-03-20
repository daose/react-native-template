import { verifyResponse, handleError } from './utils';

export default class Reddit {
  static BASE_URL = 'https://www.reddit.com';
  static HOT_ENDPOINT = '/hot.json';

  static fetchHotList() {
    return fetch(`${Reddit.BASE_URL}${Reddit.HOT_ENDPOINT}`)
      .then(verifyResponse)
      .then(response => response.json())
      .then(json => json.data.children)
      .catch(handleError);
  }
}
