
# vue-autoscroll-list

[![downloads](https://img.shields.io/npm/dm/vue-autoscroll-list.svg)](https://www.npmjs.com/package/vue-autoscroll-list)
[![npm-version](https://img.shields.io/npm/v/vue-autoscroll-list.svg)](https://www.npmjs.com/package/vue-autoscroll-list)
[![license](https://img.shields.io/npm/l/express.svg)]()

> A highly customized auto-scroll component

## ✨ Features
- 🍖 More customizable
- 👗 Multiple style themes
- 🎉 Add Speed and Interval

## 📚 Documentation

Document: not yet

Live Demo：not yet


## 🎯 install
```bash
$ yarn add vue-autoscroll-list
# npm install vue-autoscroll-list --save
```


## 🚀 Usage
```vue
<template>
  <AutoScroll :animationFlow="animationFlow" :animationSpeed="animationSpeed" :="animationInterval">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </AutoScroll>
</template>

<script>
import AutoScroll from 'vue-autoscroll-list'
import Vue from 'vue'

Vue.use(AutoScroll)

export default {
  components: {
    AutoScroll
  },
  data () {
    return {
      // for animation direction default 'utd' (up to down)
      animationFlow: 'dtu',
      // for animation speed default 2500
      animationSpeed: 2500,
      // for animation interval default 4000
      animationInterval: 4000
    }
  }
}
</script>
```

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/rendra-pramulia/vue-autoscroll-list/blob/master/CHANGELOG.md).

## Support

If you like this component, just pray a good thing for me :)

## License

[MIT](https://github.com/rendra-pramulia/vue-autoscroll-list/blob/master/LICENSE)