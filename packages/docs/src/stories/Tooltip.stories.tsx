import type { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProviderProps } from '@denidev-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip.Provider,

  args: {
    children: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Tooltip.Trigger>
          <Button>Add</Button>
        </Tooltip.Trigger>
        <Tooltip.Content content="Test Tooltip" sideOffset={5} />
      </div>
    ),
  },
  argTypes: {},
} as Meta<TooltipProviderProps>

export const Primary: StoryObj<TooltipProviderProps> = {}
