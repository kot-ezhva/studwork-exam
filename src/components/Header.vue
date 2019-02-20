<template>
    <header class="navigation">
        <nav class="container navigation__wrap">
            <router-link
                v-for="(link) in links"
                exact
                :key="`menu_${link.id}`"
                :to="link.path"
                class="navigation__link"
                active-class="navigation__link_active"
            >
                {{link.name}}
            </router-link>

            <SearchInput/>
        </nav>
    </header>
</template>

<script>
    import SearchInput from '@/components/SearchInput.vue';

    export default {
        name: 'Header',
        components: {SearchInput},
        data() {
            return {
                links: [
                    {
                        id: 1,
                        name: 'Home',
                        path: '/',
                    },
                    {
                        id: 2,
                        name: 'Wrong link',
                        path: '/what',
                    },
                ],
            };
        },
    };
</script>