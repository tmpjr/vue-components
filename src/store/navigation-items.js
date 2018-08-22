export const navigationItems = {
  namespaced: true,
  state: {
    drawer: false,
    items: []
  },
  actions: {
    loadItems({ commit }, url, http) {
      http.get(url).then(
        response => {
          commit("setItems", { items: response.data });
        },
        err => {
          if (DEVELOPMENT === true) {
            console.log(err);
          }
        }
      );
    }
  },
  mutations: {
    setItems(state, { items }) {
      state.items = items;
    },
    setDrawer(state, { drawer }) {
      state.drawer = drawer;
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    }
  },
  getters: {
    items: state => {
      return state.items;
    },
    drawer: state => {
      return state.drawer;
    }
  }
};
