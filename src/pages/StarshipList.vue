<template>
    <Loading class="starship-list" :loading="loading" :error="error">
        <StarshipItem
            v-for="(starship) in starships"
            :key="`starship_${starship.id}`"
            :starship="starship"
        />

        <Pagination/>
    </Loading>
</template>

<script>
    import {mapState} from 'vuex';
    import Common from '@/mixins/common';
    import StarshipItem from '@/components/StarshipItem.vue';
    import Loading from '@/components/Loading.vue';
    import Pagination from '@/components/Pagination.vue';

    export default {
        name: 'StarshipList',
        components: { StarshipItem, Loading, Pagination },
        mixins: [Common],
        beforeRouteUpdate(to, from, next) {
            const { page } = to.query;
            this.init(page).then(() => next());
        },
        computed: {
            ...mapState({
                starships: state => state.starships.pageItems,
            }),
        },
        created() {
            const {page} = this.$route.query;
            this.init(page);
        },
        methods: {
            init(page = 1) {
                return this.fetch('starships/getPage', { page });
            },
        },
    };
</script>