import starship from '@/api/starship';

const state = {
    count: 0,
    pageItems: [],
    prevPage: null,
    nextPage: null,
};

const actions = {
    getPage: ({commit}, {page, search}) => new Promise((resolve, reject) => {
        starship.getPage(page, search).then(res => {
            const {
                results,
                count,
                previous,
                next,
            } = res.body;

            commit('setPageItems', results);
            commit('setCount', count);
            commit('setPages', { previous, next });
            resolve();
        }).catch(err => reject(err));
    }),
    getItem: ({}, {id}) => new Promise((resolve, reject) => {
        starship.getItem(id).then(res => {
            resolve(res.body);
        }).catch(err => reject(err));
    }),
};

const mutations = {
    setPageItems: (state, payload) => {
        state.pageItems = payload.map(item => {
            const splitted = item.url.split('/');
            item.id = splitted[splitted.length - 2];
            return item;
        });
    },
    setCount: (state, payload) => {
        state.count = payload;
    },
    setPages: (state, {previous, next}) => {
        state.nextPage = null;
        state.prevPage = null;

        if (next) {
            next = new URL(next);
            state.nextPage = next ? next.searchParams.get('page') : null;
        }
        if (previous) {
            previous = new URL(previous);
            state.prevPage = previous ? previous.searchParams.get('page') : null;
        }
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};