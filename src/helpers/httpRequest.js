import axios from 'axios';
import { errorToast } from './toastMessages';


const httpRequest = async (method, url, data = null,headers=null) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return { response };
  } catch (error) {
    const errorMessage = (error.response) ? error.response.data.message.error || error.response.data.message : 'Failed Try again later';
    errorToast(errorMessage);
    return { error };
  }
};

export { httpRequest };