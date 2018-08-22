<template>
  <v-dialog 
    v-model="loading"
    persistent
    :width="width">
    <v-card 
      :color="color" 
      :light="light"
      :dark="dark">
      <v-card-text>
        {{ msg }}
        <v-progress-linear
          :value="percentComplete"
          :indeterminate="indeterminate"
          :color="barColor"
          class="mb-0">
        </v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
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
      return Math.round(100 * (1 - this.pendingRequests / this.totalRequests));
    }
  },
  props: {
    msg: {
      type: String,
      default: "Loading, please wait..."
    },
    width: {
      type: Number,
      default: 300
    },
    color: {
      type: String,
      default: "primary"
    },
    dark: {
      type: Boolean,
      default: true
    },
    light: {
      type: Boolean,
      default: false
    },
    barColor: {
      type: String,
      default: "white"
    },
    indeterminate: {
      type: Boolean,
      default: true
    }
  },
  beforeMount() {
    this.$http.interceptors.request.use(config => {
      // Every Axios request should increment our counter
      this.loading = true;
      this.pendingRequests++;
      this.totalRequests++;

      return config;
    });

    this.$http.interceptors.response.use(response => {
      // Every Axios response should decrease our counter
      this.pendingRequests--;
      if (this.pendingRequests === 0) {
        this.loading = false;
      }

      return response;
    });
  }
};
</script>
