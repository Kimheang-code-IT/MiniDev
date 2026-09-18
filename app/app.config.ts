export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      secondary: 'accent',
      success: 'accent',
      neutral: 'zinc'
    },
    button: {
      slots: {
        base: 'rounded-md font-semibold transition-all duration-200'
      },
      defaultVariants: {
        color: 'primary',
        variant: 'solid'
      }
    },
    card: {
      slots: {
        root: 'rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800'
      }
    },
    input: { slots: { root: 'w-full' } },
    textarea: { slots: { root: 'w-full' } },
    select: { slots: { base: 'w-full' } }
  }
})
