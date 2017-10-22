<template>
  <div>
    <header-top></header-top>
    <p is="footer-bottom" :number="num" @a-target="animateX"></p>
  </div>

</template>

<script type="text/ecmascript-6">
  import headerTop from './headerTop';
  import footerBottom from './footer';

  export default {
    data() {
      return {
        num:90
      }
    },
    components: {
      headerTop: headerTop,
      footerBottom
    },
    methods:{
      animateX(target){
        console.log(target);
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">

</style>
