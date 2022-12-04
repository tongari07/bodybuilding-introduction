import type { NextApiHandler } from 'next'

import type { Yell } from '@/lib/fetcher'
import { yellFetcher } from '@/lib/fetcher'

const handler: NextApiHandler<Yell[]> = async (_, res) => {
  const data = await yellFetcher()

  res.status(200).json(data)
}

export default handler
