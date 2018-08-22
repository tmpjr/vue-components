(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vcr"] = factory(require("vue"));
	else
		root["vcr"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a544586-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingDialog/LoadingDialog.vue?vue&type=template&id=75e668ed&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":"","width":_vm.width},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('v-card',{attrs:{"color":_vm.color,"light":_vm.light,"dark":_vm.dark}},[_c('v-card-text',[_vm._v("\n      "+_vm._s(_vm.msg)+"\n      "),_c('v-progress-linear',{staticClass:"mb-0",attrs:{"value":_vm.percentComplete,"indeterminate":_vm.indeterminate,"color":_vm.barColor}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoadingDialog/LoadingDialog.vue?vue&type=template&id=75e668ed&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingDialog/LoadingDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoadingDialogvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      loading: false,
      pendingRequests: 0,
      totalRequests: 0
    };
  },
  computed: {
    percentComplete: function percentComplete() {
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
  beforeMount: function beforeMount() {
    var _this = this;

    this.$http.interceptors.request.use(function (config) {
      // Every Axios request should increment our counter
      _this.loading = true;
      _this.pendingRequests++;
      _this.totalRequests++;
      return config;
    });
    this.$http.interceptors.response.use(function (response) {
      // Every Axios response should decrease our counter
      _this.pendingRequests--;

      if (_this.pendingRequests === 0) {
        _this.loading = false;
      }

      return response;
    });
  }
});
// CONCATENATED MODULE: ./src/components/LoadingDialog/LoadingDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var LoadingDialog_LoadingDialogvue_type_script_lang_js_ = (LoadingDialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/LoadingDialog/LoadingDialog.vue





/* normalize component */

var component = normalizeComponent(
  LoadingDialog_LoadingDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "LoadingDialog.vue"
/* harmony default export */ var LoadingDialog = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a544586-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainNavigation/MainNavigation.vue?vue&type=template&id=40961d91&
var MainNavigationvue_type_template_id_40961d91_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-navigation-drawer',{attrs:{"fixed":"","clipped":"","disable-route-watcher":"","app":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',{attrs:{"dense":""}},[_vm._l((_vm.items),function(item){return [(item.children)?_c('v-list-group',{attrs:{"prepend-icon":item.icon,"no-action":""}},[_c('v-list-tile',{attrs:{"slot":"activator"},slot:"activator"},[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(item.text)}})],1),_vm._l((item.children),function(child){return _c('v-list-tile',{key:child.text,attrs:{"to":{ name: child.to }},on:{"click":function($event){_vm.drawer = !_vm.drawer}}},[_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v(_vm._s(child.text))])],1),_c('v-list-tile-action',[_c('v-icon',{attrs:{"small":""}},[_vm._v(_vm._s(child.icon))])],1)],1)})],2):_c('v-list-tile',{attrs:{"to":{ name: item.to }},on:{"click":function($event){_vm.drawer = !_vm.drawer}}},[_c('v-list-tile-action',[_c('v-icon',{domProps:{"textContent":_vm._s(item.icon)}})],1),_c('v-list-tile-title',{domProps:{"textContent":_vm._s(item.text)}})],1)]})],2)],1)}
var MainNavigationvue_type_template_id_40961d91_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MainNavigation/MainNavigation.vue?vue&type=template&id=40961d91&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainNavigation/MainNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MainNavigationvue_type_script_lang_js_ = ({
  data: function data() {
    return {};
  },
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: new Array()
    }
  },
  methods: {
    toggleDrawer: function toggleDrawer() {
      this.$emit("update:drawer", !this.drawer);
    }
  }
});
// CONCATENATED MODULE: ./src/components/MainNavigation/MainNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var MainNavigation_MainNavigationvue_type_script_lang_js_ = (MainNavigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MainNavigation/MainNavigation.vue





/* normalize component */

var MainNavigation_component = normalizeComponent(
  MainNavigation_MainNavigationvue_type_script_lang_js_,
  MainNavigationvue_type_template_id_40961d91_render,
  MainNavigationvue_type_template_id_40961d91_staticRenderFns,
  false,
  null,
  null,
  null
  
)

MainNavigation_component.options.__file = "MainNavigation.vue"
/* harmony default export */ var MainNavigation = (MainNavigation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4a544586-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Demo.vue?vue&type=template&id=1581c386&
var Demovue_type_template_id_1581c386_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("Demo Vuetify Component")])]),_c('v-card-text',[_vm._v("\n        Hola\n      ")]),_c('v-card-actions',[_c('v-btn',[_vm._v("Yo")])],1)],1)],1)],1)}
var Demovue_type_template_id_1581c386_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Demo.vue?vue&type=template&id=1581c386&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Demo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Demovue_type_script_lang_js_ = ({
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/Demo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Demovue_type_script_lang_js_ = (Demovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Demo.vue





/* normalize component */

var Demo_component = normalizeComponent(
  components_Demovue_type_script_lang_js_,
  Demovue_type_template_id_1581c386_render,
  Demovue_type_template_id_1581c386_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Demo_component.options.__file = "Demo.vue"
/* harmony default export */ var Demo = (Demo_component.exports);
// CONCATENATED MODULE: ./src/components/index.js




var Components = {
  VcrLoadingDialog: LoadingDialog,
  VcrMainNavigation: MainNavigation,
  VcrDemo: Demo
};
Object.keys(Components).forEach(function (name) {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(name, Components[name]);
});
/* harmony default export */ var components = (Components);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ })

/******/ });
});
//# sourceMappingURL=vcr.umd.js.map