<template>
  <div>
    <div>
      <sidebar></sidebar>
    </div>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import sidebar from './common/sidebar';
export default {
  name: 'Home',
  components: {
    sidebar,
  },
};
</script>

<style>

</style>
