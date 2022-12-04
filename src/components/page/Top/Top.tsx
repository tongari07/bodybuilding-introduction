import { Stack } from '@mui/material'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'

import { YellArea } from '@/components/ui/YellArea/YellArea'
import { useYellText } from '@/hooks/useYellText'
import type { Player } from '@/lib/fetcher'

type TopPresenterProps = {
  players?: Player[] | undefined
  yellTexts: string[]
}

const TopPresenter: React.FC<TopPresenterProps> = ({ players, yellTexts }) => {
  return (
    <Stack spacing={8}>
      <Carousel height="60vh" autoPlay={false}>
        {players
          ?.sort((a, b) => {
            return a.orderNumber - b.orderNumber
          })
          .map(({ id, title, url }) => {
            return <Image key={id} src={url} alt={title} layout="fill" objectFit="contain" />
          })}
      </Carousel>
      <YellArea texts={yellTexts} />
    </Stack>
  )
}

type TopProps = {
  players?: Player[] | undefined
}

export const Top: React.FC<TopProps> = ({ players }) => {
  const { yellTexts } = useYellText()

  return <TopPresenter players={players} yellTexts={yellTexts} />
}
