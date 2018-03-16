import Vue from 'vue'
import Router from 'vue-router'
import TheTasks from '@/components/content/TheTasks'
import TheDirects from '@/components/content/TheDirects'
import TheContacts from '@/components/content/TheContacts'
import TheCompletes from '@/components/content/TheCompletes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {	path: '/', redirect: '/tasks' },
    { path: '/tasks', component: TheTasks },
    { path: '/directs', component: TheDirects },
    { path: '/contacts', component: TheContacts },
    { path: '/completes', component: TheCompletes },


  ]
})
