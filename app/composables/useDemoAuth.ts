export const useDemoAuth = () => {
  const user = useState<{ email: string } | null>('demo-auth-user', () => null)
  const isAuthenticated = computed(() => Boolean(user.value))

  const login = (email: string) => {
    user.value = { email }
  }

  const logout = () => {
    user.value = null
  }

  return { user, isAuthenticated, login, logout }
}
