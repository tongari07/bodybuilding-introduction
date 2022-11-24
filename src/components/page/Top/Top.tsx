import Image from 'next/image'
import { useRef, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import useSWR from 'swr'

import { YellArea } from '@/components/ui/YellArea/YellArea'
import type { Player } from '@/pages/api/players'
import type { Yell } from '@/pages/api/yells'

export const Top = () => {
  const fetcher = (url: string) => {
    return fetch(url).then((res) => {
      return res.json()
    })
  }

  const { data: players } = useSWR<Player[]>('/api/players', fetcher)

  const intervalRef = useRef<NodeJS.Timer | null>(null)
  const start = () => {
    if (intervalRef.current !== null) return
    intervalRef.current = setInterval(() => {
      setYellTexts((current) => {
        current.pop()
        return current
      })
    }, 10000)
  }

  const [yellTexts, setYellTexts] = useState<string[]>([])

  useSWR<Yell[]>('/api/yells', fetcher, {
    refreshInterval: 3000,
    onSuccess: (data) => {
      setYellTexts((current) => {
        return [
          ...data.map((y) => {
            return y.yell
          }),
          ...current,
        ]
      })
      start()
    },
  })

  return (
    <>
      <Carousel height="700px" autoPlay={false}>
        {players
          ?.sort((a, b) => {
            return a.orderNumber - b.orderNumber
          })
          .map(({ id, title, url }) => {
            return <Image key={id} src={url} alt={title} layout="fill" objectFit="contain" />
          })}
      </Carousel>
      <YellArea texts={yellTexts} />
    </>
  )
}
