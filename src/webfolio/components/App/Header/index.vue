<template>
  <div v-if="data?.data?.slices.length > 0" class="menu-main">
    <div class="menu-main__list">
      <div v-for="(item, index) in data.data.slices" :key="index" class="menu-main__item">
        <AppLink
          :key="`main-${index}`"
          :to="item.primary.link.uid"
          class="menu-main__link button button-link"
        >
          {{ item.primary.page_title }}
        </AppLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
    data: {
        type: Object,
        default: null
    }
})
</script>