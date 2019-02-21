<template>
    <div class="starship-list-item box">
        <h2 class="starship-list-item__title">
            {{ starship.name }}
        </h2>
        <p class="starship-list-item__subtitle">{{ starship.model }}</p>

        <div class="starship-list-item__footer">
            <Button @click="viewDetail()">
                View details
            </Button>
        </div>
    </div>
</template>

<script>
    import Button from '@/components/Button.vue';

    export default {
        name: 'StarshipItem',
        components: { Button },
        props: {
            starship: {
                type: Object,
                required: true,
            },
        },
        methods: {
            viewDetail() {
                const { id } = this.starship;
                this.$router.push(`/starship/${id}`);
            },
        },
    }
</script>