import { useRef, useState } from 'react'
import useSWR from 'swr'

import type { Yell } from '@/lib/fetcher'
import { yellFetcher } from '@/lib/fetcher'

export const useYellText = () => {
  const [yellTexts, setYellTexts] = useState<string[]>([])

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

  useSWR<Yell[]>('/api/yells', yellFetcher, {
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

  return { yellTexts }
}
