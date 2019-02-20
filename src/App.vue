<template>
    <div class="wrap">
        <Header/>

        <main class="container content">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';

    export default {
        name: 'App',
        components: { Header },
    };
</script>
