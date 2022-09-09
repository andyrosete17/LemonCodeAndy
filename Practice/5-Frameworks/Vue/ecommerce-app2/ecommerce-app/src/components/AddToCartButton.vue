<template>
    <button class="button" @click.prevent='addItem'>
    <slot/>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    methods: {
        addItem(event: Event) {
            this.$emit('add-item')
        }
    }
})
</script>