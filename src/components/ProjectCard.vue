

<script setup lang="ts">

import { ref } from 'vue';
import { vAutoAnimate } from '@formkit/auto-animate'

interface Props {
    name: string,
    img_url: string,
    url: string,
}

const props = defineProps<Props>()
const expand = ref(false)
const background = `url(${props.img_url})`

</script>

<template>


    <div class="project-container" @click="expand = !expand">
        <div class="project-header" />
        <div v-auto-animate class="project-name-sub">
            {{ props.name }}
            <div class="badge-container">
                <slot name="badges"></slot>
            </div>

            <div v-if="expand" class="desc-container">
                <slot />
            </div>

        </div>
    </div>

</template>




<style scoped>
.desc-container {

    padding: 16px;
    box-sizing: border-box;
    word-wrap: break-word;

}

a {
    text-decoration: none;
}

.project-header {
    background-image: v-bind("background");
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    filter: brightness(80%);
    transition: all 100ms ease-in-out;
}

.project-header:hover {
    background-size: 110%;
}

.project-container {
    position: relative;

    aspect-ratio: 1 / 1.4;
    max-width: 15rem;

    width: fit-content;

    border: solid 1px var(--color-border);
    border-radius: 0.5rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;

    background-color: var(--color-bg);
    background-clip: padding-box;

    color: var(--color-text);

    transition: all 100ms ease-in-out;
}

/*This took me SOOOO long to figure out */
.project-container::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    background: linear-gradient(-35deg,
            var(--color-accent-primary),
            var(--color-accent-secondary),
            var(--color-accent-terciary));
    border-radius: 0.5rem;
    opacity: 0;
    transition: all 100ms ease-in-out;
}

.project-container:hover::after {
    opacity: 1;
}

.project-container::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -2;
    background: linear-gradient(-35deg,
            var(--color-accent-primary),
            var(--color-accent-secondary),
            var(--color-accent-terciary));
    filter: blur(10px);
    opacity: 0;
    transition: all 100ms ease-in-out;
}

.project-container:hover::before {
    opacity: 1;
}

.project-name-sub {
    font-size: var(--font-size-base);
    font-weight: 600;
    margin: 0;
    padding: 20px;
    max-width: 15rem;
    box-sizing: border-box;
}
</style>
