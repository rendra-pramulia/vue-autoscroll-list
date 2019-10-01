import AutoScroll from './AutoScroll.vue'

function install(Vue) {
    if (install.installed) return
    install.installed = true
    Vue.component('AutoScroll', AutoScroll)
}

const plugin = {
    install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.vue
}

if (GlobalVue) {
    GlobalVue.use(plugin)
}

AutoScroll.install = install

export default AutoScroll;