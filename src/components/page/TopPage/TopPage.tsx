import { Stack } from '@mui/material'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'

import { YellArea } from '@/components/ui/YellArea/YellArea'
import { useYellText } from '@/hooks/useYellText'
import type { Player } from '@/lib/fetcher'

type TopPagePresenterProps = {
  players?: Player[] | undefined
  yellTexts: string[]
}

const TopPagePresenter: React.FC<TopPagePresenterProps> = ({ players, yellTexts }) => {
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

type TopPageProps = {
  players?: Player[] | undefined
}

export const TopPage: React.FC<TopPageProps> = ({ players }) => {
  const { yellTexts } = useYellText()

  return <TopPagePresenter players={players} yellTexts={yellTexts} />
}
