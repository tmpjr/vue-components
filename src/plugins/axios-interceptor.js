const AxiosInterceptor = {
  install(Vue, options) {
    const { axios } = options;
    const instance = new Vue({
      data() {
        return {
          loading: false,
          pendingRequests: 0,
          totalRequests: 0
        };
      },
      computed: {
        percentComplete() {
          // Need to reverse percent. Eg, 25% pendingRequests is 75% complete.
          return Math.round(
            100 * (1 - this.pendingRequests / this.totalRequests)
          );
        }
      }
    });

    axios.interceptors.request.use(config => {
      // Every Axios request should increment our counter
      instance.loading = true;
      instance.pendingRequests++;
      instance.totalRequests++;

      return config;
    });

    axios.interceptors.response.use(response => {
      // Every Axios response should decrease our counter
      instance.pendingRequests--;
      if (instance.pendingRequests === 0) {
        instance.loading = false;
      }

      return response;
    });

    Vue.prototype.$http = axios;
    Vue.prototype.$httpInterceptor = instance;
  }
};

export default AxiosInterceptor;
