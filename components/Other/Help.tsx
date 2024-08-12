'use client'
import { Box, IconButton } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Help = () => {
    const route = useRouter()
  return (
    <Box>
        <IconButton
        onClick={() => route.push("/help")}
        variant="outline"
        icon={<Icon icon={"hugeicons:customer-support"} />}
        aria-label="Get Help"
      />
    </Box>
  )
}

export default Help