<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    clipped
    disable-route-watcher 
    app>
    <v-list dense>
      <template v-for="item in items">
        <v-list-group 
          v-if="item.children" 
          :prepend-icon="item.icon"
          no-action>
          <v-list-tile slot="activator">
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            v-for="child in item.children"
            :key="child.text"
            :to="{ name: child.to }"
            @click="drawer = !drawer">
            <v-list-tile-content>
              <v-list-tile-title>{{ child.text }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon small>{{ child.icon }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-tile 
          v-else
          :to="{ name: item.to }"
          @click="drawer = !drawer">
          <v-list-tile-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="item.text"></v-list-tile-title>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>  
</template>
<script>
export default {
  data() {
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
    toggleDrawer() {
      this.$emit("update:drawer", !this.drawer);
    }
  }
};
</script>
