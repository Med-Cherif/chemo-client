import React from 'react'
import SubmenuHeader from './SubmenuHeader'
import SubmenuContent from './SubmenuContent'
import SubmenuFooter from './SubmenuFooter'
import { Wrapper } from './NotificationsSubmenu'

const MessagesSubmenu = () => {
    return (
        <Wrapper>
            <SubmenuHeader title="Messages" />
            <SubmenuContent />
            <SubmenuFooter />
        </Wrapper>
    )
}

export default MessagesSubmenu