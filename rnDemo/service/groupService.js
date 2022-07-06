import config from '../utils/config';
import {postRequest, getRequest} from '../utils/ajax';

export const getCollectedGroups = (data, callback) => {
  // TODO 等待后端修改完后更换接口
  // const url = `${config.backendUrl}/group/getCollectedGroups?userId=${data.userId}`;
  const url = `${config.backendUrl}/group/getAllGroups`;
  postRequest(url, data, callback);
};

export const getGroupById = (data, callback) => {
  const url = `${config.backendUrl}/group/getGroupById?id=${data}`;
  console.log('getGroupById data:', data);
  getRequest(url, data, callback);
};

export const collectGroup = (data, callback) => {
  const url = `${config.backendUrl}/group/collectGroup?userId=${data.userId}&groupId=${data.groupId}`;
  console.log('collectGroup data:', data);
  postRequest(url, data, callback);
};
