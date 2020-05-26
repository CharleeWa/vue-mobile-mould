<template>
  <div class="container">
    <van-nav-bar title="h5 template" class="navbar"  fixed />
    <div class="cell-group padding-top">
      <van-cell-group>
        <van-cell title="mock" is-link to="/mock"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { NavBar, Cell, CellGroup } from 'vant'
export default {
  name: 'container',
  data () {
    return {}
  },
  mounted () {},
  methods: {},
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
}
</script>

<style lang="less">
.padding-top {
  padding-top: 44px;
}
</style>
