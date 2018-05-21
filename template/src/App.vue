<template>
  <div id="app" v-if="display">
    <a-header
      :user="defaultUser"
      :locales="locales"
      :logout="logout">
      <span slot="logo" class="sp-logo">
        <div class="acribus-icon"></div>
        <div>\{{ title }}</div>
      </span>
      <span>\{{ description }}</span>
    </a-header>
    <a-menu class="sp-left-side" :data="menuData"></a-menu>
    <div class="sp-right-side">
      <article>
        <a-breadcrumb :data="menuData"></a-breadcrumb>
        <router-view></router-view>
      </article>
    </div>
  </div>
</template>

<script>
import locales from './lang/index'
export default {
  name: 'App',
  data() {
    return {
      title: this.$i18n('%s project', ['{{ name }}']),
      description: this.$i18n('{{ description }}'),
      locales,
      display: true,
      defaultUser: { email: '{{ author }}' }
    }
  },
  computed: {
    menuData() {
      return this.$store.state.menu.all
    }
  },
  methods: {
    logout() {
      location.href = '/logout'
    }
  }
}
</script>

<style>
#app {
  --header-height: 70px !important;
  --logo-height: 70px !important;
}

.sp-logo {
  font-weight: 400;
  text-align: center;
  line-height: 1;
  font-size: 12px;
}

.sp-logo .acribus-icon {
  content: 'Acribus';
  width: 140px;
  height: 35px;
  margin: 8px auto 6px;
}

.sp-left-side .title-icon {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
</style>
