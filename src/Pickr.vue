<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, watch, unref } from 'vue';
import Pickr from '@simonwep/pickr'
import { type PickrColor, type PickrInstance, type PickrOptions, PickrChangeSource, type PickrTheme } from '.';

const getChangeSource = (source: string): PickrChangeSource => {
    switch (source) {
        case "input":
            return PickrChangeSource.Input;
        case "slider":
            return PickrChangeSource.Slider;
        default:
            return PickrChangeSource.Swatch;
    }
}

const el = ref<HTMLDivElement>();
const pickr = ref<PickrInstance>();
const props = defineProps<{
    options?: PickrOptions,
    modelValue: string | null,
    colors?: string[],
    theme?: PickrTheme,
}>();

const emit = defineEmits<{
    'update:modelValue': [value: string | null]
    'onInit': [instance: PickrInstance]
    'onHide': [instance: PickrInstance]
    'onCancel': [instance: PickrInstance]
    'onClear': [instance: PickrInstance]
    'onShow': [color: PickrColor, instance: PickrInstance]
    'onSave': [color: PickrColor, instance: PickrInstance]
    'onSwatchSelect': [color: PickrColor, instance: PickrInstance]
    'onChange': [color: PickrColor, source: PickrChangeSource, instance: PickrInstance]
    'onChangeStop': [source: PickrChangeSource, instance: PickrInstance]
}>()

const onSaveColor = (color: PickrColor) => {
    const hexColor = color ? color.toHEXA().toString() : null;
    emit("update:modelValue", hexColor);
}

onMounted(() => {

    pickr.value = Pickr.create(Object.assign({}, props.options, {
        el: unref(el.value!),
        default: props.modelValue ?? undefined,
        swatches: props.colors,
        theme: props.theme ?? "classic"
    }))

    pickr.value.on("save", onSaveColor);

    pickr.value.on("init", (x: PickrInstance) => emit('onInit', x));
    pickr.value.on("hide", (x: PickrInstance) => emit('onHide', x));
    pickr.value.on("cancel", (x: PickrInstance) => emit('onCancel', x));
    pickr.value.on("clear", (x: PickrInstance) => emit('onClear', x));

    pickr.value.on("show", (x: PickrColor, y: PickrInstance) => emit('onShow', x, y));
    pickr.value.on("save", (x: PickrColor, y: PickrInstance) => emit('onSave', x, y));
    pickr.value.on("swatchselect", (x: PickrColor, y: PickrInstance) => emit('onSwatchSelect', x, y));

    pickr.value.on("change", (x: PickrColor, y: string, z: PickrInstance) => emit('onChange', x, getChangeSource(y), z));

    pickr.value.on("changestop", (x: string, y: PickrInstance) => emit('onChangeStop', getChangeSource(x), y));

    if (props.options?.comparison === false) pickr.value.on("change", onSaveColor);
})

watch(() => props.modelValue, (newVal) => {
    pickr.value?.setColor(newVal);
});

watch(() => props.colors, (newColors, oldColors) => {
    oldColors?.forEach(() => {
        pickr.value?.removeSwatch(0);
    })

    newColors?.forEach((item) => {
        pickr.value?.addSwatch(item);
    })
})

onBeforeUnmount(() => {
    pickr.value?.hide();
    pickr.value?.destroy();
    pickr.value = undefined;
});

const hide = () => pickr.value?.hide();
const show = () => pickr.value?.show();

defineExpose({
    show,
    hide
})

</script>
<template>
    <div class="vue-pickr" v-once>
        <div ref="el"></div>
    </div>
</template>