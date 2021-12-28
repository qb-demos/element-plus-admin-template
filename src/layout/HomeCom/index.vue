<template>
  <el-container class="wrap">
    <HeaderCom class="header_wrap"></HeaderCom>

    <el-container class="main-wrap">
      <!-- 侧边导航 -->
      <el-aside class="aside">
        <MenuCom></MenuCom>
      </el-aside>
      <!-- main -->
      <el-main class="main">
        <div></div>
        <div class="router-wrap">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import HeaderCom from '@/layout/HeaderCom/index.vue'
import MenuCom from '@/layout/MenuCom/index.vue'

export default defineComponent({
  name: 'Home',
  components: { HeaderCom, MenuCom },
  setup () {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
    const tableData = ref(Array(20).fill(item))

    return { tableData }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header_wrap {
    width: 100%;
    flex: 0 0 50px;
    height: 0;
    line-height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
  }
  .main-wrap {
    flex: 1;
    height: 0;
    display: flex;
    .aside {
      flex: 0 0 200px;
      width: 0;
      height: 100%;
      background-color: rgb(238, 241, 246)
    }
    .main {
      flex: 1;
      height: 100%;
      padding: 16px;
      display: flex;
      overflow: auto;
      flex-direction: column;
      > div {
        &:first-child {
          flex: 0;
        }
      }
      .router-wrap {
        flex: 1;
        height: 0;
        // overflow: auto;
      }
    }
  }
}
</style>

<style lang="scss">
.aside {
  .el-menu {
    height: 100%;
  }
}
</style>
