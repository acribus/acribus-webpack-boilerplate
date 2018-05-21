import request from './request'

export default {
  getMenus () {
    return request.get('/api/menu/list')
  }
}
