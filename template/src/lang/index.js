import en from './test-en.json'
import zhHans from './test-zh-Hans.json'
import zhHant from './test-zh-Hant.json'

const locales = {
  'en': { ...en, _name: 'English' },
  'zh-CN': { ...zhHans, _name: '简体中文' },
  'zh-TW': { ...zhHant, _name: '繁體中文' }
}

export default locales
