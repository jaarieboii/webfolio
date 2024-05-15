<template>
    <div ref="page">
        <SliceZone :components="components" :slices="document?.data?.slices" />
    </div>
</template>

<script lang="ts" setup>
    import { components } from '~/slices'

    const { client } = usePrismic()
    const route = useRoute()

    const page = ref(null)
    const { data: document } = await useAsyncData(`page-${route.params.uid}`, () => client.getByUID('fullpage', route.params.uid))

</script>
