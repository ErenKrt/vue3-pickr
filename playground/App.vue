<script lang="ts" setup>
import { ref } from 'vue';
import VuePickr, { PickrColor, PickrComponent, PickrInstance, PickrOptions, PickrChangeSource } from '../src';

import '@simonwep/pickr/dist/themes/classic.min.css'
import '@simonwep/pickr/dist/themes/monolith.min.css'
import '@simonwep/pickr/dist/themes/nano.min.css'

const color = ref("red");
const colors= ref(["red", "blue", "green", "pink"])
const options = ref<PickrOptions>({
  //comparison: false,
  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsva: true,
      input: true,
      clear: true,
      save: true
    }
  }
})
const pickr= ref<PickrComponent>();

const onInit= (instance: PickrInstance)=>console.log("Init", instance);
const onCancel= (instance: PickrInstance)=>console.log("Cancel", instance);
const onHide= (instance: PickrInstance)=>console.log("Hide", instance);
const onClear= (instance: PickrInstance)=>console.log("Clear", instance);

const onShow= (color:PickrColor, instance: PickrInstance)=>console.log("Show", color, instance);
const onSave= (color:PickrColor, instance: PickrInstance)=>console.log("Save", color, instance);
const onSwatchSelect= (color:PickrColor, instance: PickrInstance)=>console.log("SwatchSelect", color, instance);

const onChange= (color: PickrColor, source: PickrChangeSource, instance: PickrInstance)=>console.log("Change", color, source, instance);
const onChangeStop= (source: PickrChangeSource, instance: PickrInstance)=>console.log("ChangeStop", source, instance);

</script>
<template>

  <header>
    <h1>Vue3 Pickr. Keep it simple.</h1>
    <a href="https://github.com/erenkrt/vue3-pickr" target="_blank">VIEW ON GITHUB</a>
    <div class="color" :style="`background-color: ${color};`"></div>
    <h4>Your Color is <b>{{ color }}</b></h4>
  </header>

  <main>
    <p>(Tap it)</p>

    <div class="pickr-container">
      <div class="pickr-group">
        <span>Classic</span>
        <VuePickr ref="pickr" v-model="color" :options="options"/>
      </div>

      <div class="pickr-group">
        <span>Monolith</span>
        <VuePickr v-model="color" :options="options" theme="monolith"/>
      </div>

      <div class="pickr-group">
        <span>Nano</span>
        <VuePickr v-model="color" :options="options" theme="nano"/>
      </div>
    </div>

    <div class="pickr-container">
      <div class="pickr-group">
        <span>Swatches</span>
        <VuePickr ref="pickr" v-model="color" :options="options" :colors="colors"/>
      </div>


      <div class="pickr-group">
        <span>Events</span>
        <VuePickr ref="pickr" v-model="color" :options="options" @onInit="onInit" @onHide="onHide" @onShow="onShow" @onSave="onSave" @onClear="onClear" @onChange="onChange" @onChangeStop="onChangeStop" @onCancel="onCancel" @onSwatchSelect="onSwatchSelect"/>
      </div>
    </div>


  </main>
</template>
