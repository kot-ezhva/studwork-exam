<template>
    <div class="search-input" @click="focus()" :class="{'show-close' : showClose}">
        <input
            class="search-input__input"
            type="text"
            placeholder="Search"
            ref="input"
            v-model="query"
            @input="search()"
            @keyup.enter="doSearch()"
        >
        <button class="search-input__clear" @click="clear()" v-show="showClose">
            <span class="search-input__clear_icon"></span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'SearchInput',
        data() {
            return {
                loading: false,
                timeout: null,
                query: this.$route.query.search || '',
            };
        },
        computed: {
            showClose() {
                return this.query;
            },
        },
        methods: {
            focus() {
                const { input } = this.$refs;
                input.focus();
            },
            search() {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                }
                this.timeout = setTimeout(this.doSearch, 1000);
            },
            doSearch() {
                this.loading = true;
                clearTimeout(this.timeout);

                const search = this.query.trim();
                const to = { path: '/' };
                if (search) {
                    to.query = {
                        search
                    };
                }
                this.$router.push(to);
            },
            clear() {
                this.query = '';
                this.doSearch();
            },
        },
    }
</script>