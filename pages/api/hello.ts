import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
  res.status(200).json('Hello World!');
}
