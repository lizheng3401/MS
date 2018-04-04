<template>
  <div>
    <el-row :gutter="5">
      <el-carousel height="200px" type="card" indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row>
      <el-card v-for="(blog,index) in blogs" :key="index" :body-style="{ padding: '5px' }">
        <el-row>
          <el-col :span="1">
            <img :src="blog.avator" height="40px"/>
          </el-col>
          <el-col :span="2" :offset="1">
            {{blog.createdTime}}
          </el-col>
        </el-row>
        <el-row>
          {{blog.text}}
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    getBlogList() {
      const self = this;
      this.$http({
        url: 'api/blog/list',
        method: 'get',
      }).then((resp) => {
        self.blogs = resp.data;
      });
    },
  },
  created() {
    this.getBlogList();
  },
};
</script>

<style>

</style>

