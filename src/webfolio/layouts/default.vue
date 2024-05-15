<template>
    <div>
        <AppHeader class="layout__header"             
        :data="navigationData"
        />

        <main id="main" class="main layout__main">
            <slot />
        </main>

        <!-- <AppFooter
        :data="footerNavigationData"
        class="layout__footer"
        /> -->
    </div>
</template>

<script setup lang="ts">

const { data: navigationData } = await useNavigation('main_navigation', 'default')
</script>