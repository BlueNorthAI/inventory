// import { type Message } from 'ai'
import { useLoaderData } from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'

import { SidebarActions } from '~/components/sidebar-actions'
import { SidebarItem } from '~/components/sidebar-item'
import { JsonifyChat } from '~/lib/types'
// import { shareChat} from '~/models/chat.server'
import { useUser } from '~/utils'



interface SidebarItemsProps {
  chats?: JsonifyChat[]
}

export function SidebarItems({ chats }: SidebarItemsProps) {
  const { shareChatFn } = useLoaderData() as { shareChatFn: (id: string, userId: string) => void }
  const user = useUser()
  if (!chats?.length) return null

  return (
    <AnimatePresence>
      {chats.map(
        (chat, index) =>
          chat && (
            <motion.div
              key={chat?.id}
              exit={{
                opacity: 0,
                height: 0
              }}
            >
              <SidebarItem index={index} chat={chat}>
                <SidebarActions
                  chat={chat}
                  // removeChat={removeChat}
                  shareChat={(id) => shareChatFn(id, user.id)}
                />
              </SidebarItem>
            </motion.div>
          )
      )}
    </AnimatePresence>
  )
}
