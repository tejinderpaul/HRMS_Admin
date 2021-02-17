<template>
  <CSidebar 
  
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none bg-white" to="/">
     
      <c-img 
       class="c-sidebar-brand-full" 
        size="custom-size" 
        :height="55" 
        :width="200"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHPB-Xd_VZZPug-lL10OKkNRpdnKEfLHWTw&usqp=CAU"
      />
      
      <c-img 
       class="c-sidebar-brand-minimized" 
        size="custom-size" 
        :height="55" 
        :width="55"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHPB-Xd_VZZPug-lL10OKkNRpdnKEfLHWTw&usqp=CAU"
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
