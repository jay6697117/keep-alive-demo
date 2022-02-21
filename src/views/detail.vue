<template>
  <div>
    <h1>detail.vue</h1>
    <button @click="change">改变</button>
  </div>
</template>

<script>
export default {
  name: 'detail',
  methods: {
    change() {
      this.$store.commit('setCacheNames', 'list');
    }
  },
  created() {
    console.log('detail this.$route.fullPath:', this.$route.fullPath);
  }
};
</script>

<style lang="scss" scoped></style>
