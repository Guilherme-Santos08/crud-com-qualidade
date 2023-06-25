import { NextApiRequest, NextApiResponse } from 'next'

export default function handle(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  response.status(200).json({ message: 'Hello' })
}
