import { NextApiRequest, NextApiResponse } from 'next'
import { todoController } from '@server/controller/todo'

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  todoController.get(req, res)
}
