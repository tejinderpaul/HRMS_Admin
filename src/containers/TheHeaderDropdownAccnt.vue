<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="https://www.clipartkey.com/mpngs/m/102-1029067_student-flat-icon-www-pixshark-com-images-galleries.png"
            class="c-avatar-img"
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Settings</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CButton
        :to="{
          name: 'profile-view',
        }"
        ><CIcon name="cil-user" /> Profile</CButton
      >
    </CDropdownItem>
    <CDropdownItem>
      <CButton v-on:click="logout(id)"
        ><CIcon name="cil-lock-locked" /> Logout</CButton
      >
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import axios from "axios";
export default {
  name: "TheHeaderDropdownAccnt",
  data() {
    return {
      id:"",   
      itemsCount: 42,
    };
  },
  created() {
    this.id = JSON.parse(localStorage.getItem("data"))._id;
    
  },
  methods: {
    logout(id) {
      axios.post("http://192.168.1.20:4000/user/logout", {id:this.id}).then((res) => {
    
        localStorage.clear();
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>