const request = async (method, route, content) => {
  let header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
  };
    let options = {
        method: method,
        headers: header     
        }
    if(content !== null)
        options["body"] = JSON.stringify(content)

  return fetch(route, options)
    .then((data) => {
        if (data.headers.get('content-length') === '0')
        return { result: [], failure: false, errorMessage: null };
        else if (data.status === 200 && data.body !== null)
        return { result: data.json(), failure: false, errorMessage: null };
      else
        return {
          result: null,
          failure: true,
          errorMessage: ```${data.status} : test```,
        };
    })
    .catch((e, a, b) => {
      return {
        result: null,
        failure: true,
        errorMessage: `${e}  || ${a} || ${b}`,
      };
    });
};

const post = async(route, content) => {
  return await request("POST", route, content);
};

const apiBaseRoute = process.env.REACT_APP_API_URL;

const saveGoogleSecrets = async (content) => {
  return await post(`${apiBaseRoute}/Youtube`, content);
};

const login = async (content) => {
  return await post(`${apiBaseRoute}/auth/login`, content);
};

const register = async (content) => {
  return await post(`${apiBaseRoute}/auth/register`, content);
};

const api = { saveGoogleSecrets, login, register };
export default api