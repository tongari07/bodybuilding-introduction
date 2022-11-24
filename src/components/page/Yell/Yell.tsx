import CampaignIcon from '@mui/icons-material/Campaign'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import { Backdrop, Button, Stack } from '@mui/material'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import { supabase } from '@/lib/supabase'
import { getRandomYell, getRandomYells } from '@/utils/yells'

export const Yell = () => {
  const [yells, setYells] = useState<string[]>([])

  const [isOpenBackdrop, setIsOpenBackdrop] = useState(false)

  const openBackdrop = useCallback(() => {
    setIsOpenBackdrop(true)
    setTimeout(() => {
      return setIsOpenBackdrop(false)
    }, 1000)
  }, [])

  const resetYells = useCallback(() => {
    return setYells(getRandomYells(4))
  }, [])

  useEffect(() => {
    return resetYells()
  }, [resetYells])

  const sendYell = useCallback(
    async (yell: string) => {
      openBackdrop()
      resetYells()
      await supabase.from('yells').insert({ yell })
    },
    [openBackdrop, resetYells]
  )

  const sendRandomYell = useCallback(async () => {
    return await sendYell(getRandomYell())
  }, [sendYell])

  return (
    <>
      <Stack spacing={8} px={2} py={4}>
        <Stack spacing={2}>
          {yells.map((yell, index) => {
            return (
              <Button
                key={index}
                variant="outlined"
                size="large"
                sx={{ fontWeight: 'bold' }}
                onClick={() => {
                  return sendYell(yell)
                }}
              >
                {yell}
              </Button>
            )
          })}
        </Stack>
        <Stack spacing={2} justifyContent="center">
          <Button startIcon={<ShuffleIcon />} onClick={resetYells}>
            違うエールを見る
          </Button>
          <Button startIcon={<CampaignIcon />} onClick={sendRandomYell}>
            ランダムでエールを送る
          </Button>
        </Stack>
      </Stack>
      <Backdrop open={isOpenBackdrop}>
        <Image alt="yell" src="/yell.png" layout="fill" objectFit="contain" />
      </Backdrop>
    </>
  )
}
