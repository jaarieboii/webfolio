<template>
  <div>
    {{ slice.primary.title }}
  </div>
</template>

<script setup lang="ts">
import type { WorkReferenceSlice } from '../../../../prismicio-types'

const props = defineProps(
  getSliceComponentProps<WorkReferenceSlice>([
    'slice',
    'index',
    'slices',
    'context'
  ])
)

</script>
