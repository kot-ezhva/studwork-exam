export default {
    name: 'Common',
    data() {
        return {
            error: null,
            loading: true,
        };
    },
    methods: {
        fetch(actionType, params = {}) {
            this.loading = true;

            return this.$store.dispatch(actionType, params).catch(err => {
                this.error = err;
            }).finally(() => {
                this.loading = false;
            });
        },
    },
}