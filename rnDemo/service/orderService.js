import config from '../utils/config';
import {postRequest, getRequest} from '../utils/ajax';

export const addToCart = (data, callback) => {
  const url = `${config.backendUrl}/order/addToCart?userId=${data.userId}&groupId=${data.groupId}&goodsId=${data.goodsId}&goodsNumber=${data.goodsNumber}`;
  // console.log('addToCart data:', data);
  getRequest(url, data, callback);
};

export const getCart = (data, callback) => {
  const url = `${config.backendUrl}/order/getGroupCart?userId=${data.userId}&groupId=${data.groupId}`;
  // console.log('getCart data:', data);
  getRequest(url, data, callback);
};


export const addOrder = (data, callback) => {
  const url = `${config.backendUrl}/order/addOrder?userId=${data.userId}&groupId=${data.groupId}&addressId=${data.addressId}&time=${data.time}`;
  console.log('addOrder data:', data);
  getRequest(url, data, callback);
}