<template>
    <Loading :loading="loading" :error="error">
        <h1 v-if="isSearchResult">Search results:</h1>

        <div class="starship-list">
            <StarshipItem
                v-for="(starship) in starships"
                :key="`starship_${starship.id}`"
                :starship="starship"
            />
        </div>

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
            const { page, search } = to.query;
            this.init(page, search).then(() => next());
        },
        computed: {
            ...mapState({
                starships: state => state.starships.pageItems,
            }),
            isSearchResult() {
                const { search } = this.$route.query;
                return !!search;
            },
        },
        created() {
            const { page, search } = this.$route.query;
            this.init(page, search);
        },
        methods: {
            init(page = 1, search) {
                return this.fetch('starships/getPage', { page, search });
            },
        },
    };
</script>