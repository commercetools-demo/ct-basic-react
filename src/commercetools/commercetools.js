/* Encapsulate the JS SDK modules into a simple pair of exports:
    requestBuilder (see https://commercetools.github.io/nodejs/sdk/api/apiRequestBuilder.html)
    callCT - call commercetool via the sdk-client "execute" method 
      (https://commercetools.github.io/nodejs/sdk/api/sdkClient.html)

*/

import { createRequestBuilder } from '@commercetools/api-request-builder'
import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'

const authUrl = process.env.REACT_APP_AUTH_URL;
const projectKey = process.env.REACT_APP_PROJECT_KEY;
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const scopes = [process.env.REACT_APP_SCOPES];
const apiUrl = process.env.REACT_APP_API_URL;

console.log(projectKey,clientId,clientSecret,scopes);
const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: authUrl,
  projectKey: projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: clientSecret,
  },
  scopes: scopes
})

const httpMiddleware = createHttpMiddleware({
  host: apiUrl,
})

const client = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

export const requestBuilder = createRequestBuilder({projectKey})

export async function callCT(args) {
  let res = await client.execute({
    uri: args.uri,
    method: args.method,
    body: args.body,
  });
  console.log(res);
  return res;
}
