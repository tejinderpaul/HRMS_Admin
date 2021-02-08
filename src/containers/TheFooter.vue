<template>
  <CFooter :fixed="false">
    <div>
      <a href="#" target="_blank">HRMS</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}}</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="https://quventix.com/">Quventix Solutions</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
