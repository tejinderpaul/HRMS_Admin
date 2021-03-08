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
import config from "@/config";
import VueSweetalert2 from "vue-sweetalert2";
import Vue from "vue";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

export default {
  name: "TheHeaderDropdownAccnt",
  data() {
    return {
      id: "",
      itemsCount: 42,
    };
  },
  created() {
    this.id = JSON.parse(localStorage.getItem("data"))._id;
  },
  methods: {
    logout(id) {
      axios
        .post(`${config.apiUrl}/user/logout`, { id: this.id })
        .then((res) => {
          Vue.swal.fire({
            toast: true,
            position: "top",
            icon: "success",
            title: "Logout successfully",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
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