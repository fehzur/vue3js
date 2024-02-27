<template>
    <link rel="stylesheet" href="css/logout.css">
    <div></div>
  </template>
  <style>
</style>
  <script>
  export default {
    mounted() {
      setTimeout(() => {
        this.$router.push('/');
      }, 300); 
    },
  };
  </script>