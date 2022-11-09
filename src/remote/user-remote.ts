import {BASEURL} from '../constants/constants.app';
import requestServer from '../shared/workers/request.server';

// Paths
const getUser_req = '/getUserbyId';

export const getUserInfoRemote = async (payload: any) => {
  // need to parse when react query key
  try {
    const url = BASEURL + `${getUser_req}?user_id=${payload.uid}`;
    const response = await requestServer('GET', url);
    if (response.status !== 200) {
      return false;
    }
    if (response.data) {
      return response.data;
    }
    throw new Error('getUserInfoRemote() failed');
  } catch (err) {
    console.log(err);
    throw err;
  }
};
