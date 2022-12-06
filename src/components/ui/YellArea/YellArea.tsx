import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'

export type YellToastProps = {
  texts: string[]
}

export const YellArea: React.FC<YellToastProps> = ({ texts }) => {
  return (
    <Stack direction="row" justifyContent="flex-end">
      <Stack spacing={0}>
        {texts.slice(0, 5).map((text, index) => {
          return (
            <Typography key={index} fontSize={60} lineHeight={1.2} fontFamily="" fontWeight="bold" align="right">
              {text}
            </Typography>
          )
        })}
      </Stack>
      <Box style={{ position: 'relative', height: '40vh', width: '500px' }}>
        <Image
          alt="yells"
          src="https://res.cloudinary.com/dlaz5urbm/image/upload/c_scale,w_1200/v1670175673/yells_bumiwj.webp"
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </Stack>
  )
}
