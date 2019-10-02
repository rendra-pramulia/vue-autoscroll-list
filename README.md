
# vue-autoscroll-list

[![downloads](https://img.shields.io/npm/dm/vue-autoscroll-list.svg)](https://www.npmjs.com/package/vue-autoscroll-list)
[![npm-version](https://img.shields.io/npm/v/vue-autoscroll-list.svg)](https://www.npmjs.com/package/vue-autoscroll-list)
[![license](https://img.shields.io/npm/l/express.svg)]()

> auto scroll list (ticker) directive for >= [vuejs 2.0](https://vuejs.org/v2/guide/)

## Installation (NPM recomended)
```bash
$ npm install vue-autoscroll-list --save
# yarn add vue-autoscroll-list
```

## Get started

```javascript
import Vue from 'vue'
import AutoScroll from 'vue-autoscroll-list'

Vue.use(AutoScroll)
```

Directive AutoScroll then can be used in any of your Component.

```html
<template>
  <AutoScroll>
    <div>1</div>
    <div>2</div>
    ...
  </AutoScroll>
</template>
```

## Props Options

|prop|description|default|type|
|:---|---|---|---|
| `animationFlow`|for animation direction `'utd'` (up to down) / `'dtu'` (down to top)|`'utd'`|`String`|
|`animationSpeed`|speed of scroll|`2500`|`Number`
|`animationInterval`|interval to the next scroll|`4000`|`Number`|

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/rendra-pramulia/vue-autoscroll-list/blob/master/CHANGELOG.md).

## Support

If you like this component, just pray a good thing for me :)

## License

[MIT](https://github.com/rendra-pramulia/vue-autoscroll-list/blob/master/LICENSE)