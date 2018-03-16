<template lang="pug">
  div#app.app
    the-header
    navigation-bar
    div.content
      transition(name="fade" mode="out-in")
        router-view
    div.footer
</template>

<script>
import NavigationBar from '@/components/NavigationBar';
import TheHeader from '@/components/TheHeader';
export default {
  name: 'App',
  components: {
    NavigationBar,
    TheHeader,
  }
}
</script>

<style lang="less">
@import './less/vars.less';
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

  background-image: url('./assets/background.jpg');
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

  &::-webkit-scrollbar {
      width: 12px;
  }

  &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }
}

.footer {
  .max-width;
  height: 20px;
  flex: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
