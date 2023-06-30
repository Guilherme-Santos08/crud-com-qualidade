import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  response.status(200).json({ message: 'Hello' })
}
