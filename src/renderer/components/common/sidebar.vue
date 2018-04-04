<template>
  <div class="sidebar">
    <el-menu default-active="/" class="el-menu-vertical-demo" :collapse="true" unique-opened router>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/game">
        <i class="el-icon-setting"></i>
        <span slot="title">游戏</span>
      </el-menu-item>
      <el-menu-item index="/blog">
        <i class="el-icon-document"></i>
        <span slot="title">博客</span>
      </el-menu-item>
      <el-menu-item index="/personal">
        <i class="el-icon-menu"></i>
        <span slot="title">个人</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>
<style>
.sidebar{
    display: block;
    position: absolute;
    width: 60px;
    left: 0;
    top: 0px;
    bottom:0;
  }
</style>
