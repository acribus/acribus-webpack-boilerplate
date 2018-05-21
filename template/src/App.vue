<template>
  <div id="app" v-if="display">
    <sp-header
      :user="defaultUser"
      :locales="locales"
      :logout="logout">
      <span slot="logo" class="sp-logo">
        <div class="shopee-icon"></div>
        <div>\{{ title }}</div>
      </span>
      <span>\{{ description }}</span>
    </sp-header>
    <sp-menu class="sp-left-side" :data="menuData"></sp-menu>
    <div class="sp-right-side">
      <article>
        <sp-breadcrumb :data="menuData"></sp-breadcrumb>
        <router-view></router-view>
      </article>
    </div>
  </div>
</template>

<script>
import spHeader from 'acribus/packages/components/Header/index.js'
import spMenu from 'acribus/packages/components/Menu/index.js'
import spBreadcrumb from 'acribus/packages/components/Breadcrumb/index.js'
import locales from './lang/index'

export default {
  name: 'App',
  components: { spHeader, spMenu, spBreadcrumb },
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

.sp-logo .shopee-icon {
  width: 140px;
  height: 35px;
  margin: 8px auto 6px;
  background: url('./assets/shopee.svg') center /contain no-repeat;
}

.sp-left-side .title-icon {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
</style>
