<template>
  <div>
    <h1>list.vue 首次进入刷新, detail页面返回{{ cacheNames.length > 0 ? '不' : '' }}刷新</h1>
    <button @click="goDetail">goDetail</button>
  </div>
</template>

<script>
export default {
  name: 'list',
  computed: {
    isRefresh() {
      return this.$store.state.isRefresh;
    }
  },
  methods: {
    async fetchData() {
      let promise = await fetch('https://json-server-demo-rho.vercel.app/companies');
      let result = await promise.json();
      console.log('result', result);
    },
    goDetail() {
      this.$router.push({
        path: '/detail'
      });
    }
  },
  created() {
    this.fetchData();
    console.log('list this.$route.fullPath:', this.$route.fullPath);
  }
};
</script>

<style lang="scss" scoped></style>
