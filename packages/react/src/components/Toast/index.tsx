import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ReactNode } from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'

import {
  TitleAndClose,
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastViewport,
} from './styles'

export interface ToastContentProps extends ToastPrimitive.ToastProps {
  title: string
  content: string
}

function ToastContent({ title, content, ...props }: ToastContentProps) {
  return (
    <>
      <ToastContainer {...props}>
        <TitleAndClose>
          <ToastPrimitive.Title>
            <Heading size="sm">{title}</Heading>
          </ToastPrimitive.Title>
          <ToastClose asChild>
            <X />
          </ToastClose>
        </TitleAndClose>
        <ToastDescription asChild>
          <Text size="sm">{content}</Text>
        </ToastDescription>
      </ToastContainer>
      <ToastViewport />
    </>
  )
}

export interface ToastProviderProps {
  children: ReactNode
}

function ToastProvider({ children }: ToastProviderProps) {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      {children}
    </ToastPrimitive.Provider>
  )
}

export const Toast = {
  Content: ToastContent,
  Provider: ToastProvider,
}
