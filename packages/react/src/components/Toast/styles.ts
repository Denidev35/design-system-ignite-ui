import * as ToastPrimitive from '@radix-ui/react-toast'

import { styled, keyframes } from '../../styles'

const VIEWPORT_PADDING = 25

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const slideOut = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: VIEWPORT_PADDING,
  width: 360,
  height: 82,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastContainer = styled(ToastPrimitive.Root, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  padding: '$3 $5',
  gap: '$1',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${slideOut} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const TitleAndClose = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$gray200',
})

export const ToastClose = styled(ToastPrimitive.Close, {
  background: 'transparent',
  border: 0,
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  color: '$gray200',
})
