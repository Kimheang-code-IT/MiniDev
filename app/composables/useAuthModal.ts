export type AuthMode = 'trial'

export const useAuthModal = () => {
  const isOpen = useState('auth-modal-open', () => false)
  const mode = useState<AuthMode>('auth-modal-mode', () => 'trial')
  const selectedApp = useState<string | undefined>('auth-selected-app', () => undefined)

  const open = (nextMode: AuthMode, appSlug?: string) => {
    mode.value = nextMode
    selectedApp.value = appSlug
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  return { isOpen, mode, selectedApp, open, close }
}
