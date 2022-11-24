import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'
import useSWR from 'swr'

import type { Player } from '@/pages/api/players'

export const Top = () => {
  const fetchPlayers = (url: string) => {
    return fetch(url).then((res) => {
      return res.json()
    })
  }

  const { data } = useSWR<Player[]>('/api/players', fetchPlayers)

  return (
    <Carousel height="700px" autoPlay={false}>
      {data
        ?.sort((a, b) => {
          return a.orderNumber - b.orderNumber
        })
        .map(({ id, title, url }) => {
          return <Image key={id} src={url} alt={title} layout="fill" objectFit="contain" />
        })}
    </Carousel>
  )
}
