<template>
    <section class="pagination">
        <p class="pagination__total">Starships total: {{ count }}</p>

        <template v-if="showButtons">
            <Button :disabled="!prevPage" @click="goPrev()">Prev</Button>
            <Button :disabled="!nextPage" @click="goNext()">Next</Button>
        </template>
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    import Button from '@/components/Button.vue';

    export default {
        name: 'Pagination',
        components: { Button },
        computed: {
            ...mapState({
                count: state => state.starships.count,
                prevPage: state => state.starships.prevPage,
                nextPage: state => state.starships.nextPage,
            }),
            showButtons() {
                return !!this.prevPage || !!this.nextPage;
            },
        },
        methods: {
            goNext() {
                this.goToPage(this.nextPage);
            },
            goPrev() {
                this.goToPage(this.prevPage);
            },
            goToPage(page) {
                const { search } = this.$route.query;
                this.$router.push({ path: '/', query: { page, search }});
            }
        }
    }
</script>