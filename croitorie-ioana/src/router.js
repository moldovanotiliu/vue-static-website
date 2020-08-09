import Vue from 'vue';
import Router from 'vue-router';
import Landing from './pages/Landing.vue';
import Services from './pages/Services.vue';
import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import Quiz from './pages/Quiz.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [

    {
      path:'/',
      name: 'home',
      components: { default: Landing, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/portofoliu',
      name: 'portofoliu',
      components: { default: Profile, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/servicii',
      name: 'servicii',
      components: { default: Services, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
          }
        },

        {
          path: '/quiz',
          name: 'quiz',
          components: { default: Quiz, header: MainNavbar },
          props: {
            header: { colorOnScroll: 400 },
            footer: { backgroundColor: 'black' }
              }
            },
      
     
  
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
