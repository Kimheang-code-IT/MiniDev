<script setup lang="ts">
interface Props {
  title?: string
  video?: string
  poster?: string
  demo?: boolean
  seed?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  video: '',
  poster: '',
  demo: true,
  seed: 0
})

const DURATION = 12000
const defaultBars = [35, 60, 48, 82, 68, 96, 74]

const scenes = [
  { key: 'pipeline', nav: 2, values: [128, 92, 47], bars: [35, 60, 48, 82, 68, 96, 74], cursor: { left: '58%', top: '34%' } },
  { key: 'inbox', nav: 4, values: [64, 210, 18], bars: [72, 40, 88, 52, 96, 60, 44], cursor: { left: '26%', top: '58%' } },
  { key: 'reports', nav: 6, values: [97, 140, 76], bars: [50, 78, 62, 40, 84, 58, 92], cursor: { left: '72%', top: '66%' } }
]

const { t } = useI18n()
const rootEl = ref<HTMLElement | null>(null)
const progress = ref(props.seed ? (props.seed % scenes.length) * (100 / scenes.length) : 0)
const playing = ref(false)
const reducedMotion = ref(false)

let raf = 0
let lastTime = 0
let observer: IntersectionObserver | null = null

const isDemo = computed(() => props.demo && !props.video)
const decorative = computed(() => !props.demo && !props.video)
const displayTitle = computed(() => props.title || t('mockup.workspace'))

const activeScene = computed(() => Math.min(scenes.length - 1, Math.floor((progress.value / 100) * scenes.length)))
const scene = computed(() => scenes[activeScene.value]!)
const sceneLabel = computed(() => t(`mockup.scenes.${scene.value.key}`))
const sceneQuery = computed(() => t(`mockup.queries.${scene.value.key}`))
const sceneProgress = computed(() => (progress.value / 100) * scenes.length - activeScene.value)

const displayedValues = computed(() => {
  const local = Math.max(0, Math.min(1, sceneProgress.value))
  return scene.value.values.map((target, index) => Math.round(target * Math.min(1, local * (1 + index * 0.3) + 0.04)))
})

const chartBars = computed(() => (isDemo.value ? scene.value.bars : defaultBars))
const statCards = computed(() => (isDemo.value ? displayedValues.value : []))
const showControls = computed(() => isDemo.value && !reducedMotion.value)

const tick = (time: number) => {
  if (!playing.value) return
  if (!lastTime) lastTime = time
  const delta = time - lastTime
  lastTime = time
  progress.value = (progress.value + (delta / DURATION) * 100) % 100
  raf = requestAnimationFrame(tick)
}

const play = () => {
  if (!isDemo.value || reducedMotion.value || playing.value) return
  playing.value = true
  lastTime = 0
  raf = requestAnimationFrame(tick)
}

const pause = () => {
  playing.value = false
  cancelAnimationFrame(raf)
}

const toggle = () => {
  if (playing.value) pause()
  else play()
}

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isDemo.value) return
  if (reducedMotion.value) {
    progress.value = ((props.seed % scenes.length) + 1) * (100 / scenes.length) - 1
    return
  }
  observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) play()
    else pause()
  }, { threshold: 0.35 })
  if (rootEl.value) observer.observe(rootEl.value)
})

onBeforeUnmount(() => {
  pause()
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <div
    ref="rootEl"
    class="glass-panel flex min-h-[22rem] flex-col overflow-hidden rounded-sm p-3 sm:min-h-[28rem] sm:p-5 lg:min-h-[32rem]"
    :aria-hidden="decorative ? 'true' : undefined"
  >
    <div class="flex items-center gap-2 border-b border-zinc-200 pb-3 dark:border-zinc-800">
      <span class="size-2.5 rounded-full bg-rose-400" />
      <span class="size-2.5 rounded-full bg-amber-400" />
      <span class="size-2.5 rounded-full bg-emerald-400" />
      <span class="ml-3 truncate text-xs font-medium text-zinc-500">{{ displayTitle }}</span>
      <div v-if="!decorative" class="ml-auto flex items-center gap-2">
        <span v-if="isDemo" class="hidden items-center gap-1.5 rounded-full bg-brand-100 px-2.5 py-1 text-[11px] font-semibold text-brand-700 sm:inline-flex dark:bg-brand-950 dark:text-brand-200">
          <span class="relative flex size-1.5">
            <span class="absolute inline-flex size-full rounded-full bg-brand-500 opacity-75" :class="playing ? 'animate-ping' : ''" />
            <span class="relative inline-flex size-1.5 rounded-full bg-brand-600" />
          </span>
          {{ playing ? t('mockup.playing') : t('mockup.ready') }}
        </span>
        <button
          v-if="showControls"
          type="button"
          class="grid size-9 place-items-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          :aria-label="playing ? t('mockup.pause') : t('mockup.play')"
          @click="toggle"
        >
          <UIcon :name="playing ? 'i-lucide-pause' : 'i-lucide-play'" class="size-4" />
        </button>
      </div>
    </div>

    <p v-if="!decorative" class="sr-only">
      {{ t('mockup.description', { title: displayTitle }) }}
    </p>

    <div v-if="video" class="mt-3 min-h-0 flex-1 overflow-hidden rounded-md bg-black">
      <video
        :src="video"
        :poster="poster || undefined"
        controls
        playsinline
        preload="metadata"
        class="h-full w-full object-cover"
        :aria-label="t('mockup.videoLabel', { title: displayTitle })"
      />
    </div>

    <template v-else>
      <div class="grid min-h-0 flex-1 grid-cols-[4rem_1fr] gap-4 pt-4 sm:grid-cols-[9rem_1fr]">
        <div class="flex flex-col gap-3 rounded-sm bg-brand-950 p-3 text-white">
          <div class="h-8 rounded-sm bg-white/15" />
          <div
            v-for="i in 8"
            :key="i"
            class="h-3 rounded-sm transition-all duration-500"
            :class="isDemo && activeScene + 2 === i ? 'w-full bg-accent-400/70' : 'w-3/4 bg-white/10'"
          />
          <div class="mt-auto h-8 rounded-sm bg-white/10" />
        </div>
        <div class="flex min-h-0 min-w-0 flex-col gap-4">
          <div v-if="isDemo" class="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900">
            <UIcon name="i-lucide-search" class="size-3.5 shrink-0" />
            <span class="truncate">{{ sceneQuery }}</span>
            <span class="inline-block h-3.5 w-px shrink-0 animate-pulse bg-brand-500" />
          </div>
          <div class="grid gap-3 sm:grid-cols-3">
            <div v-for="(value, i) in statCards.length ? statCards : [0, 0, 0]" :key="i" class="rounded-xl bg-zinc-100 p-3 dark:bg-zinc-800">
              <div class="h-2 w-14 rounded bg-zinc-300 dark:bg-zinc-600" />
              <p v-if="isDemo" class="mt-3 text-2xl font-bold tabular-nums text-brand-700 dark:text-brand-200">{{ value }}</p>
              <div v-else class="mt-3 h-6 w-10 rounded bg-brand-300 dark:bg-brand-700" />
            </div>
          </div>
          <div class="relative flex min-h-0 flex-1 flex-col rounded-sm border border-zinc-200 p-4 dark:border-zinc-700">
            <div class="flex min-h-40 flex-1 items-end gap-2 sm:min-h-52">
              <div
                v-for="(height, i) in chartBars"
                :key="i"
                class="flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-accent-300 transition-all duration-700 ease-out"
                :style="{ height: `${height}%` }"
              />
            </div>
            <span
              v-if="isDemo"
              class="pointer-events-none absolute grid size-5 place-items-center rounded-full bg-white text-brand-700 shadow-lg ring-1 ring-brand-200 transition-all duration-1000 ease-in-out dark:ring-brand-800"
              :style="scene.cursor"
            >
              <UIcon name="i-lucide-mouse-pointer" class="size-3" />
            </span>
          </div>
        </div>
      </div>

      <div v-if="isDemo" class="mt-3">
        <div class="h-1 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
          <div class="h-full rounded-full bg-brand-600 transition-[width] duration-100 ease-linear" :style="{ width: `${progress}%` }" />
        </div>
        <div class="mt-1.5 flex items-center justify-between text-[11px] font-medium text-zinc-500">
          <span>{{ sceneLabel }}</span>
          <span class="tabular-nums">{{ Math.round(progress) }}%</span>
        </div>
      </div>
    </template>
  </div>
</template>
