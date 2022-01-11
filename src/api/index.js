import axios from 'axios'

const base_url="https://jsonplaceholder.typicode.com";
export const API = {
    BASE_URL:base_url,
    POSTS:'/posts'

}

export const requestGet = (url, extraHeaders = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(base_url+url, {
            headers: {
                "Accept": "application/json",
                ...extraHeaders
            }
        }).then(response => {
            console.log('API', 'requestGet-response.status', response.status);
            resolve(response.data);
        }).catch(error => {
            console.log('API', 'requestGet-error', error);
            reject(error);
        });
    });
}
export const requestPost = (url,data,extraHeaders = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(base_url+url,data,{
            headers: {
                "Accept": "application/json",
                ...extraHeaders
            }
        }).then(response => {
            console.log('API', 'requestPost-response.status', response.data);
            resolve(response.data);
        }).catch(error => {
            console.log('API', 'requestPost-error', error);
            reject(error);
        });
    });
}
export const requestPatch = (url,id,data,extraHeaders = {}) => {
    return new Promise((resolve, reject) => {
        axios.patch(base_url+url+"/"+id,data,{
            headers: {
                "Accept": "application/json",
                ...extraHeaders
            }
        }).then(response => {
            console.log('API', 'requestPost-response.status', response.data);
            resolve(response.data);
        }).catch(error => {
            console.log('API', 'requestPost-error', error);
            reject(error);
        });
    });
}
export const requestDelete = (url,id,extraHeaders = {}) => {
    return new Promise((resolve, reject) => {
        axios.delete(base_url+url+"/"+id,{},{
            headers: {
                "Accept": "application/json",
                ...extraHeaders
            }
        }).then(response => {
            console.log('API', 'requestPost-response.status', response.data);
            resolve(response.data);
        }).catch(error => {
            console.log('API', 'requestPost-error', error);
            reject(error);
        });
    });
}

axios.interceptors.request.use(
    async config => {
      const token ='isAuth'
      const requestConfig = config;
      requestConfig.headers = {
        Authorization: `Bearer ${token}`,
        "Accept": "application/json",
      };
      console.log('RESQUEST',JSON.stringify(config));
      return requestConfig;
    },
    err => {
      console.log('Error', err);
      return Promise.reject(err);
    },
  );