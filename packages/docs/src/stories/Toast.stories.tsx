import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProviderProps } from '@denidev-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast.Provider,

  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)
      return (
        <Toast.Provider>
          <Button onClick={() => setOpen(true)}>Agendar</Button>
          <Toast.Content
            open={open}
            onOpenChange={setOpen}
            title="Toast Title"
            content="Toast Content"
          />
        </Toast.Provider>
      )
    },
  ],
} as Meta<ToastProviderProps>

export const Primary: StoryObj<ToastProviderProps> = {}
