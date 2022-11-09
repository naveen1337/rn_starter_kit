import { BASE_URL } from '../assets/constants/constants-app';
import requestServer from '../helpers/request-server';

// paths
const allRoles_req = '/getRole';


export const loginRemote = async (payload: any) => {
  try {
    return false
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getAllRolesRemote = async () => {
  try {
    const url = BASE_URL + allRoles_req;
    const response = await requestServer('GET', url);
    if (response.data) {
      return response.data;
    }
    throw new Error('getAllRolesRemote() failed');
  } catch (err) {
    throw err;
  }
};
