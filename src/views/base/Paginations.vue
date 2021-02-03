<template>
  <div>
        <CPagination
          align="end"
          :active-page.sync="currentPage"
          :pages="10"
        />
        <br>
  </div>
</template>

<script>
export default {
  name: 'Paginations',
  data () {
    return {
      currentPage: 1
    }
  }
}
</script>
