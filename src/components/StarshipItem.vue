<template>
    <div class="starship-list-item">
        <h2 class="starship-list-item__title">{{ starship.name }}</h2>
        <p class="starship-list-item__model"><b>Model: </b>{{ starship.model }}</p>
        <p class="starship-list-item__description">{{ starship.manufacturer }}</p>
        <router-link
            class="starship-list-item__link"
            :to="`/starship/${starship.id}`"
        >
            View full info
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'StarshipItem',
        props: {
            starship: {
                type: Object,
                required: true,
            },
        },
    }
</script>