import type { NextApiHandler } from 'next'

import { supabase } from '@/lib/supabase'

export type Yell = {
  id: string
  yell: string
}

const handler: NextApiHandler<Yell[]> = async (_, res) => {
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

  res.status(200).json(data)
}

export default handler
