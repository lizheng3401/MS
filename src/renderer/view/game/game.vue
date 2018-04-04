<template>
  <div>
    <el-row v-for="item in 4" :key="item" :gutter="10">
      <h2>分类{{item}}</h2>
      <hr/>
      <el-row v-for="item in 4" :key="item" :gutter="5">
         <el-col :span="4">dsad</el-col>
         <el-col :span="4">game1</el-col>
         <el-col :span="4">game1</el-col>
         <el-col :span="4">game1</el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
