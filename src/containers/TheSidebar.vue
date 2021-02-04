<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <!-- <CIcon 
        class="c-sidebar-brand-full" 
        name="cilStar" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 556 134"
      /> -->
      <c-img 
       class="c-sidebar-brand-full" 
        size="custom-size" 
        :height="55" 
        :width="200"
      src="https://img.icons8.com/officel/2x/truck.png"
      />
      <!-- <CIcon 
        class="c-sidebar-brand-minimized" 
        name="cilLaptop" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 110 134"
      /> -->
      <c-img 
       class="c-sidebar-brand-minimized" 
        size="custom-size" 
        :height="55" 
        :width="55"
      src="https://img.icons8.com/officel/2x/truck.png"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'

export default {
  name: 'TheSidebar',
  nav,
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    }
  }
}
</script>
