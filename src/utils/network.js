import request from './request';
import queryString from 'query-string'
import {HOST} from './constants'

const Network = () => {
  const buildUrl = (path) => {
    let parameters = [HOST, 'api', 'v1']
    parameters = parameters.concat([path]);

    return parameters.join('/');
  };

  return {
    post: (path, body, options = {}) => {
      return request(buildUrl(path), Object.assign(
        options,
        {
          method: 'POST',
          body: JSON.stringify(body)
        }
      ));
    },

    get: (path, options = {}) => {
      let q = queryString.stringify(options, {arrayFormat: 'bracket'})
      return request(buildUrl(path) + `?${q}`,
        { method: 'GET' }
      );
    },

    update: (path, body, options = {}) => {
      return request(buildUrl(path), Object.assign(
        options,
        { method: 'PUT', body: JSON.stringify(body) }
      ));
    },

    delete: (path, options = {}) => {
      return request(buildUrl(path), Object.assign(
        options,
        { method: 'DELETE' }
      ));
    },
  };
};

export default Network;
