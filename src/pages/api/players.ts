import type { Asset } from 'contentful'
import type { NextApiHandler } from 'next'

import { buildClient } from '@/lib/contentful'

type PlayerEntry = {
  title: string
  orderNumber: number
  image: Asset
}

export type Player = {
  id: string
  title: string
  orderNumber: number
  url: string
}

const handler: NextApiHandler<Player[]> = async (_, res) => {
  const contentfulClient = buildClient()
  const entries = await contentfulClient.getEntries<PlayerEntry>('players')

  const data = entries.items.map(({ sys, fields }) => {
    return {
      id: sys.id,
      title: fields.title,
      orderNumber: fields.orderNumber,
      url: `https:${fields.image.fields.file.url}?fm=webp`,
    }
  })

  res.status(200).json(data)
}

export default handler
