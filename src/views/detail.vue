<template>
  <div>
    <h1>detail.vue</h1>
    <button @click="changeSub">去除</button>
    <button @click="changeAdd">增加</button>
  </div>
</template>

<script>
export default {
  name: 'detail',
  methods: {
    changeSub() {
      this.$store.commit('subCacheNames', 'list');
    },
    changeAdd() {
      this.$store.commit('addCacheNames', 'list');
    }
  },
  created() {
    console.log('detail this.$route.fullPath:', this.$route.fullPath);
  }
};
</script>

<style lang="scss" scoped></style>
