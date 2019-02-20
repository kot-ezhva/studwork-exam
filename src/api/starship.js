import Vue from 'vue';

export default {
    getPage(page) {
        return Vue.http.get('starships', { params: { page } } );
    },
    getItem(id) {
        return Vue.http.get(`starships/${id}`);
    },
};