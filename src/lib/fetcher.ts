import type { Asset } from 'contentful'

import { buildClient } from '@/lib/contentful'
import { supabase } from '@/lib/supabase'

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

export const playerFetcher = async (): Promise<Player[]> => {
  const contentfulClient = buildClient()
  const entries = await contentfulClient.getEntries<PlayerEntry>('players')

  return entries.items.map(({ sys, fields }) => {
    return {
      id: sys.id,
      title: fields.title,
      orderNumber: fields.orderNumber,
      url: `https:${fields.image.fields.file.url}?fm=webp`,
    }
  })
}

export type Yell = {
  id: string
  yell: string
}

export const yellFetcher = async (): Promise<Yell[]> => {
  const yells = await supabase.from('yells').select('id, yell').neq('subscribed', true)
  const data =
    yells.data?.map<Yell>(({ id, yell }) => {
      return { id, yell }
    }) || []
  await supabase
    .from('yells')
    .update({ subscribed: true })
    .in(
      'id',
      data.map((y) => {
        return y.id
      })
    )
  return data
}
