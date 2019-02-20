<template>
    <Loading class="starship-view" :loading="loading" :error="error">
        <div
            class="starship-view__header"
        >
            <h1 class="starship-view__title">{{ starship.name }}</h1>
        </div>
        <p class="starship-view__text">
            {{ starship }}
        </p>

        <button @click="goBack()">Go back</button>
    </Loading>
</template>

<script>
    import Common from '@/mixins/common';
    import Loading from '@/components/Loading.vue';

    export default {
        name: 'StarshipView',
        components: {Loading},
        mixins: [Common],
        data() {
            return {
                starship: {},
            };
        },
        created() {
            const {id} = this.$route.params;
            this.fetch('starships/getItem', {id}).then(res => {
                this.starship = res;
            });
        },
        methods: {
            goBack() {
                this.$router.back();
            }
        },
    }
</script>