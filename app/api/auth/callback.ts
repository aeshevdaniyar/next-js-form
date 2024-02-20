import { initApiClient, updateTokens } from '@/shared/oauth'
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { code } = req.query;
    // Get the access token
    const client = initApiClient({});
    const token = await client.authorize(code);   
    updateTokens(client, token);
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;