<template>
    <section class="loading">
        <div v-if="loading" class="loading__text">
            <div class="loading__emoji">{{currentEmoji}}</div>
            loading
        </div>

        <Error v-else-if="showError" :status="error.status" />

        <slot v-else></slot>
    </section>
</template>

<script>
    import Error from '@/components/Error.vue';

    export default {
        name: 'Loading',
        components: {Error},
        props: {
            loading: {
                required: true,
                type: Boolean,
                default: true,
            },
            error: {
                type: [Object, null],
                default: null,
            },
        },
        watch: {
            loading(newVal) {
                if (newVal) {
                    this.interval = setInterval(this.run, 100);
                } else {
                    clearInterval(this.interval);
                }
            },
        },
        data() {
            return {
                interval: null,
                currentSlideCollection: 0,
                currentIndex: 0,
                slideCollections: [
                    ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒' , '🌓', '🌔'],
                    ['🌎', '🌍', '🌏'],
                    ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'],
                ],
            };
        },
        computed: {
            slides() {
                return this.slideCollections[this.currentSlideCollection];
            },
            currentEmoji() {
                return this.slides[this.currentIndex];
            },
            showError() {
                return !this.loading && this.error;
            },
        },
        created() {
            this.currentSlideCollection = this.getCollectionIndex();
            this.interval = setInterval(this.run, 100);
        },
        methods: {
            getCollectionIndex() {
                let rand = Math.random() * this.slideCollections.length;
                return Math.floor(rand);
            },
            run() {
                const newIndex = this.currentIndex + 1;
                if (this.slides[newIndex]) {
                    this.currentIndex = newIndex;
                } else {
                    this.currentIndex = 0;
                }
            },
        },
    }
</script>