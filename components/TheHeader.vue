<template functional>
  <div class="header">
			<div class="phone">+7 (499) 736-21-84</div>
      <a href="/">"Космос-Коннект"</a>
  </div>
</template>
<style lang="less">
@import '~assets/less/vars.less';
.header {
  .max-width;
  height: 4rem;
  margin: auto;
  position: relative;
  text-align: left;
  flex: none;

  .phone {
    position: absolute;
    right: 3rem;
    font-size: 1.7rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #aaa;
  }

  a {
    display: inline-block;
    padding: 1rem 2rem 1rem 1rem;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    font-style: italic;

  }
}
</style>
