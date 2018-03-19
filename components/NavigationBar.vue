<template>
  <ul class="navbar">
    <li><router-link to="/tasks">Задачи предприятия</router-link></li>
    <li><router-link to="/directs">Направление деятельности</router-link></li>
    <li><router-link to="/">Контакты</router-link></li>
    <li><router-link to="/completes">Выполненные работы</router-link></li>
  </ul>
</template>
<style lang="less">
@import '~assets/less/vars.less';
.navbar {
  .max-width;
  flex: none;
  display: flex;

	// padding: 5px;
  background: rgba(70, 70, 70, 0.5);
  border-top: 1px solid grey;
  padding: 0 0 8px 0;
  margin: 0;

  li {
    padding: 6px 12px;
    list-style: none;

    a {
      color: white;
      text-decoration: none;
      font-size: 0.9rem;
    }
  }

}
</style>
