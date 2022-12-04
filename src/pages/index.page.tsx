import type { NextPage } from 'next'
import useSWR from 'swr'

import { TopPage } from '@/components/page/TopPage/TopPage'
import type { Player } from '@/lib/fetcher'
import { playerFetcher } from '@/lib/fetcher'

type Props = {
  fallbackData: Player[]
}

const Top: NextPage<Props> = ({ fallbackData }) => {
  const { data } = useSWR('/api/players', playerFetcher, { fallbackData })

  return <TopPage players={data} />
}

export const getStaticProps = async () => {
  const players = await playerFetcher()

  return {
    props: {
      fallbackData: players,
    },
  }
}

export default Top
