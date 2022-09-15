import { styled } from '@mui/material'
import React from 'react'
import SubmenuContent from './SubmenuContent'
import SubmenuFooter from './SubmenuFooter'
import SubmenuHeader from './SubmenuHeader'

export const Wrapper = styled('div')(() => ({
  width: '380px'
}))

const NotificationsSubmenu = () => {
    return (
      <Wrapper>
        <SubmenuHeader title="Notification" />
        <SubmenuContent />
        <SubmenuFooter />
      </Wrapper>
    )
}

export default NotificationsSubmenu