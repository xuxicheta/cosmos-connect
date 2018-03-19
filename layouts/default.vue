<template lang="pug">
  div#app.app
    the-header
    navigation-bar
    div.content
      transition(name="fade" mode="out-in")
        nuxt
    div.footer
</template>
<script>
import NavigationBar from '../components/NavigationBar.vue';
import TheHeader from '../components/TheHeader.vue';
export default {
  components: {
    NavigationBar,
    TheHeader,
  },
}
</script>

<style lang="less">
@import '~assets/less/vars.less';
html, body {
  margin: 0;
  padding: 0;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;

  background-image: url('~static/img/background.jpg');
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
}

.content {
  .max-width;
  background: rgba(250,250,255,0.8);
  padding: 15px;
  flex: auto;
  box-sizing: border-box;
  overflow-y: auto;

  h3 {
    margin: 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 0.3rem;
  }
}

.footer {
  .max-width;
  height: 20px;
  flex: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.2s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
