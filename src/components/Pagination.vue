<template>
    <section class="pagination">
        <p class="pagination__total">Starships total: {{ count }}</p>

        <button class="pagination__button" :disabled="!prevPage" @click="goPrev()">Prev</button>
        <button class="pagination__button" :disabled="!nextPage" @click="goNext()">Next</button>
    </section>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'Pagination',
        computed: {
            ...mapState({
                // TODO: Show count
                count: state => state.starships.count,
                prevPage: state => state.starships.prevPage,
                nextPage: state => state.starships.nextPage,
            }),
        },
        methods: {
            goNext() {
                this.goToPage(this.nextPage);
            },
            goPrev() {
                this.goToPage(this.prevPage);
            },
            goToPage(page) {
                this.$router.push({ path: '/', query: { page }});
            }
        }
    }
</script>