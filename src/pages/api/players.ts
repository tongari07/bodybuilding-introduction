import type { NextApiHandler } from 'next'

import type { Player } from '@/lib/fetcher'
import { playerFetcher } from '@/lib/fetcher'

const handler: NextApiHandler<Player[]> = async (_, res) => {
  const data = await playerFetcher()

  res.status(200).json(data)
}

export default handler
