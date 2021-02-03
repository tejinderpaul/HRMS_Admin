<template>
  <div class="c-app">
    <CWrapper>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
    </CWrapper>
  </div>
</template>

<script>
// let localData = localStorage.getItem("token");
// if (localData != null) {
//   this.$router.push({ path: "dashboard" });
// }
export default {
  name: "TheLoginContainer",
  components: {},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
