'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    console.log('Changing route')
    router.push('/users')
  })

  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    </>
  )
}
