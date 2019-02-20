import StarshipList from '@/pages/StarshipList.vue'
import StarshipView from '@/pages/StarshipView.vue'


import Error from '@/components/Error.vue';

export default [
    { path: '/', component: StarshipList },
    { path: '/starship/:id', component: StarshipView },

    { path: '/*', component: Error },
];