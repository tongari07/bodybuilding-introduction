import type { NextPage } from 'next'
import useSWR from 'swr'

import { Top } from '@/components/page/Top/Top'
import type { Player } from '@/lib/fetcher'
import { playerFetcher } from '@/lib/fetcher'

type Props = {
  fallbackData: Player[]
}

const TopPage: NextPage<Props> = ({ fallbackData }) => {
  const { data } = useSWR('/api/players', playerFetcher, { fallbackData })

  return <Top players={data} />
}

export const getStaticProps = async () => {
  const players = await playerFetcher()

  return {
    props: {
      fallbackData: players,
    },
  }
}

export default TopPage
