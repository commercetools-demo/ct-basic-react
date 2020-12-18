// Basic browser-friendly version of commercetools API-calling functions

const authUrl = process.env.REACT_APP_AUTH_URL;
const projectKey = process.env.REACT_APP_PROJECT_KEY;
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_ID;
const scopes = [process.env.REACT_APP_SCOPES];
const apiUrl = process.env.REACT_APP_API_URL;

async function getAccessToken() {
  let token = localStorage.getItem('ct_token');
  if(token) {
    return token;
  }
  let res = await fetch(
    `${authUrl}/oauth/token`,
    {
      headers: {
        accept: '*/*',
        authorization: `Basic ${btoa(
          `${clientId}:${clientSecret}`,
        )}`,
        'content-type':
                      'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&scope=${scopes}`,
      method: 'POST'
    },
  )
  let data = await res.json();
  localStorage.setItem('ct_token',data.access_token);
  return data.access_token;
}

async function callCT(args) {
  let token = await getAccessToken();
  let res = await fetch(
    `${apiUrl}/${projectKey}/${args.uri}`,
    {
      headers: {
        accept: '*/*',
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      method: args.method,
    }
  );
  let data = await res.json();
  console.log(data);
  return data;
}

export default callCT;