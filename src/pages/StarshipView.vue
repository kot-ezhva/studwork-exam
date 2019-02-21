<template>
    <Loading :loading="loading" :error="error">
        <div class="starship-view box">

            <h1 class="starship-view__title">{{ starship.name }}</h1>

            <p class="starship-view__value">
                <b>Model: </b>
                {{ starship.model }}
            </p>
            <p class="starship-view__value">
                <b>Manufacturer: </b>
                {{ starship.manufacturer }}
            </p>
            <p class="starship-view__value">
                <b>Length: </b>
                {{ starship.length }}
            </p>
            <p class="starship-view__value">
                <b>Class: </b>
                {{ starship.starship_class }}
            </p>
            <p class="starship-view__value">
                <b>Passengers: </b>
                {{ starship.passengers }}
            </p>
            <p class="starship-view__value">
                <b>MGLT: </b>
                {{ starship.MGLT }}
            </p>
            <p class="starship-view__value">
                <b>Cargo capacity: </b>
                {{ starship.cargo_capacity }}
            </p>
            <p class="starship-view__value">
                <b>Consumables: </b>
                {{ starship.consumables }}
            </p>
            <p class="starship-view__value">
                <b>Crew: </b>
                {{ starship.crew }}
            </p>
            <p class="starship-view__value">
                <b>Films: </b>
                {{ starship.films ? starship.films.length : 0 }}
            </p>
            <p class="starship-view__value">
                <b>Hyperdrive rating: </b>
                {{ starship.hyperdrive_rating }}
            </p>
            <p class="starship-view__value">
                <b>Max atmosphering speed: </b>
                {{ starship.max_atmosphering_speed }}
            </p>
            <p class="starship-view__value">
                <b>Pilots: </b>
                {{ starship.pilots ? starship.pilots.length : 0 }}
            </p>
            <p class="starship-view__value">
                <b>Cost: </b>
                {{ starship.cost_in_credits }}
            </p>
            <p class="starship-view__value">
                <b>Created: </b>
                {{ formatDate(starship.created) }}
            </p>
            <p class="starship-view__value">
                <b>Edited: </b>
                {{ formatDate(starship.edited) }}
            </p>
        </div>

        <Button @click="goBack()">Go back</Button>
    </Loading>
</template>

<script>
    import Common from '@/mixins/common';
    import Loading from '@/components/Loading.vue';
    import Button from '@/components/Button.vue';

    export default {
        name: 'StarshipView',
        components: {Loading, Button},
        mixins: [Common],
        data() {
            return {
                starship: {},
            };
        },
        created() {
            const {id} = this.$route.params;
            this.fetch('starships/getItem', {id}).then(res => {
                this.starship = res;
            });
        },
        methods: {
            goBack() {
                this.$router.back();
            },
            formatDate(date) {
                return new Date(date);
            },
        },
    }
</script>