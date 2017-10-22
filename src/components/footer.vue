<template>
  <div class="footer">
    {{number}}
    <button @click="animationTarget"></button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      'number': {
        type: Number
      }
    },
    methods: {
      animationTarget(e) {
        this.$emit('a-target', e.target);
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.footer{
  button{
    display: block
    width: 100px
    height: 30px
    background: #00a0dc
  }
}
</style>
