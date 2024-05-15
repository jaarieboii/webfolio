<template>
    <NuxtLink :event="event" :to="href" :prefetch="prefetch" :no-prefetch="noPrefetch">
      <slot />
    </NuxtLink>
  </template>
  
  <script lang="ts" setup>  
  const props = defineProps({
    to: {
      type: String,
      required: true
    },
    prefetch: {
      type: Boolean,
      default: undefined
    },
    noPrefetch: {
      type: Boolean,
      default: undefined
    },
    event: {
      type: [String, Array],
      default: 'click'
    }
  })
  
  const { to, prefetch, noPrefetch, event } = toRefs(props)
    
  const href = computed(() => {
    return to.value
  })
  </script>
  