import type { NextApiRequest, NextApiResponse } from "next"
export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const now = new Date()
  const currentTime = now.toISOString()
  res.status(200).json({ currentTime })
}
export default handler
