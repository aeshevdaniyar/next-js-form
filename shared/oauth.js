import {
    ApiClient
} from 'pipedrive'


export const initApiClient = ({ }) => {
    const client = new ApiClient();
    const oAuth2 = client.authentications.oauth2;
    oAuth2.clientId = process.env.CLIENT_ID;
    oAuth2.clientSecret = process.env.CLIENT_SECRET;
    oAuth2.redirectUri = process.env.REDIRECT_URL;

    return client;
}

export const getAuthUrl = (client) => {
    const authUrl = client.buildAuthorizationUrl()
    return authUrl
}

export const updateTokens = (client, token) => {
    const oAuth2 = client.authentications.oauth2;
    oAuth2.accessToken = token.access_token;
    oAuth2.refreshToken = token.refresh_token;
  };