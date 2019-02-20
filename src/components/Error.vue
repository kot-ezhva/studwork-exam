<template>
    <div class="error">
        <h1 class="error_title">{{ errorText }}</h1>
        <router-link to="/">
            Go to main page
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Error',
        props: {
            status: {
                type: [String, Number],
                default: 404,
            }
        },
        computed: {
            errorText() {
                return `🤦 ‍Oops! Something went wrong! (#${this.status})`;
            },
        },
    }
</script>