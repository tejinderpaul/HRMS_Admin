<template>
  <CSidebar 
  
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none bg-white" to="/dashboard">
     
      <c-img 
       class="c-sidebar-brand-full" 
        size="custom-size" 
        :height="100" 
        :width="100"
      src="https://www.megasoftsol.com/hrhungary/images/hrms_icon.png"
      />
      
      <c-img 
       class="c-sidebar-brand-minimized" 
        size="custom-size" 
        :height="50" 
        :width="50"
      src="https://www.megasoftsol.com/hrhungary/images/hrms_icon.png"
      />
    </CSidebarBrand>

    <CRenderFunction v-if="userData.role=='admin'||userData.role=='superadmin'||userData.role=='hr'" flat :content-to-render="$options.nav"/>
    <CRenderFunction  v-if="userData.role=='employee'||userData.role=='teamlead'||userData.role=='manager'" flat :content-to-render="$options.nav1"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>

import nav from './_nav'
import nav1 from './_nav1'
// console.log(userData.role);

export default {
data(){
  return{
    userData:[]
  }
},
  name: 'TheSidebar',
  nav,
  nav1,
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    }
  },created(){
    this.userData =JSON.parse(localStorage.getItem("data"))
      
  
}
}
</script>
