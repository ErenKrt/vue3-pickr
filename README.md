
<h3 align="center">
    Vue3 <a href="https://github.com/simonwep/pickr">Pickr.</a>
</h3>

<h5 align="center">
  <a href="https://erenkrt.github.io/vue3-pickr/">Fully Featured Demo</a>
</h5>

<br/>

## Getting Started

Install via npm:
```shell
$ npm install @erenkrt/vue3-pickr
```

Install via pnpm:
```shell
$ pnpm add @erenkrt/vue3-pickr
```

Install via yarn:
```shell
$ yarn add @erenkrt/vue3-pickr
```

Include code and style:
```js
// One of the following themes
import '@simonwep/pickr/dist/themes/classic.min.css';   // 'classic' theme
import '@simonwep/pickr/dist/themes/monolith.min.css';  // 'monolith' theme
import '@simonwep/pickr/dist/themes/nano.min.css';      // 'nano' theme


import VuePickr from '@erenkrt/vue3-pickr'; // Vue component
```

## Usage
```html
<VuePickr v-model="color" />
```

## Events

| Event      | Description | Arguments |
| -------------- | ----------- | --------- |
| `init`         | Initialization done - pickr can be used | `PickrInstance` |
| `hide`         | Pickr got closed | `PickrInstance` |
| `show`         | Pickr got opened | `PickrColor, PickrInstance` |
| `save`         | User clicked the save / clear button. Also fired on clear with `null` as color. | `PickrColor or null, PickrInstance` |
| `clear`        | User cleared the color. | `PickrInstance` |
| `change`       | Color has changed (but not saved). Also fired on `swatchselect` | `PickrColor, PickrChangeSource, PickrInstance` |
| `changestop`   | User stopped to change the color | `PickrChangeSource, PickrInstance` |
| `cancel`       | User clicked the cancel button (return to previous color). | `PickrInstance` |
| `swatchselect` | User clicked one of the swatches | `PickrColor, PickrInstance` |

> Example:
```html
<VuePickr
    @onInit="onInit"
    @onHide="onHide"
    @onShow="onShow"
    @onSave="onSave"
    @onClear="onClear"
    @onChange="onChange"
    @onChangeStop="onChangeStop"
    @onCancel="onCancel"
    @onSwatchSelect="onSwatchSelect"
/>
```

## Options
```html
const options= ref<PickrOptions>({});
<VuePickr :options="options" />
```

## Reference
```html
const pickr= ref<PickrComponent>();
<VuePickr ref="pickr" />
```

## Methods
* pickr.show()`:Pickr` _- Shows the color-picker._
* pickr.hide()`:Pickr` _- Hides the color-picker._


## Contributing
If you want to open a issue, create a Pull Request or simply want to know how you can run it on your local machine.

[![Developer](https://img.shields.io/badge/-Developer-E4405F?style=flat-square&logo=Instagram&logoColor=white)](https://www.instagram.com/ep.eren)