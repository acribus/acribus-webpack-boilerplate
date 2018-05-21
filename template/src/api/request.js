import axios from 'axios'
import Vue from 'vue'

import { i18n } from 'acribus'

export const baseURL = __BASEURL__

const request = axios.create({
  baseURL,
  withCredentials: true,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken'
})

request.interceptors.response.use(function (response) {
  if (response.data.retcode === -100) {
    location.href = '/login' + '?redirect=' + encodeURI(location.href)
  } else if (response.data.retcode) {
    Vue.prototype.$message.error(i18n(response.data.message))
  }
  return response.data
}, function (error) {
  if (error.request && error.request.status === 401) {
    location.href = (location.host + '/login' + '?redirect=' + encodeURI(location.href))
    return
  }
  // Do something with response error
  return Promise.reject(error)
})

export default request
