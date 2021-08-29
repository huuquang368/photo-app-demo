import axiosClient from './axiosClient';

const productApi = {
  getAll: params => {
    const url = '/products';
    return axiosClient.get(url, {
      params,
      // baseURL: https://test/api/products => custom baseURL,
      // headers: { tesing: 'test' } => custom headers
    });
  },
  get: id => {
    const url = `/products${id}`;
    return axiosClient.get(url);
  },
};
export default productApi;
