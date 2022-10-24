import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { Text } from '../Text'
import { TooltipStyledContent } from './styles'

export interface TooltipProviderProps {
  children: ReactNode
}

function TooltipProvider({ children }: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export interface TooltipTriggerProps {
  children: ReactNode
}

function TooltipTrigger({ children }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
}

export interface TooltipContentProps
  extends TooltipPrimitive.TooltipContentProps {
  content: string
}

export function TooltipContent({ content, ...props }: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipStyledContent {...props}>
        <TooltipPrimitive.Arrow />
        <Text size="sm">{content}</Text>
      </TooltipStyledContent>
    </TooltipPrimitive.Portal>
  )
}

export const Tooltip = {
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
}
