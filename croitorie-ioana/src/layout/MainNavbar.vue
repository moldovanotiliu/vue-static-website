<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        C&D Ioana
      </router-link>
    </template>
    <template slot="navbar-menu">

      <li class="nav-item" >
        <a
          class="nav-link"
          href="/"
          target="_self"
          
        >
          <i class="now-ui-icons education_paper"    ></i>
          <p>Despre Noi</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          href="/portofoliu"  
          target="_self"
        >
          <i class="now-ui-icons media-1_album"></i>
          <p>Portofoliu</p>
        </a>
      </li>

      <li class="nav-item" >
        <a
          class="nav-link"
          href="/servicii"
          target="_self"
          
        >
          <i class="now-ui-icons education_paper"    ></i>
          <p>Servicii</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          href="/#Contact"  
          target="_self"
          
        >
          <i class="now-ui-icons location_map-big" ></i>
          <p>Contact</p>
        </a>
      </li>
      
      <li class="nav-item">
        <a
          class="nav-link"
          href="/quiz"  
          target="_self"
          
        >
          <i class="now-ui-icons emoticons_satisfied" ></i>
          <p>Trivia</p>
        </a>
      </li>
    
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/ioana.moldovan.100"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      
    </template>
  </navbar>
</template>

<script>
import { Navbar} from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,  
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
