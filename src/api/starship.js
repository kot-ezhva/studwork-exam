import Vue from 'vue';

export default {
    getPage(page, search) {
        const params = {page, search};
        return Vue.http.get('starships', { params });
    },
    getItem(id) {
        return Vue.http.get(`starships/${id}`);
    },
};