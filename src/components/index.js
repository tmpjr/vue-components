import Vue from "vue";
import VcrLoadingDialog from "./LoadingDialog/LoadingDialog.vue";
import VcrMainNavigation from "./MainNavigation/MainNavigation.vue";
import VcrDemo from "./Demo.vue";

const Components = {
  VcrLoadingDialog,
  VcrMainNavigation,
  VcrDemo
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
