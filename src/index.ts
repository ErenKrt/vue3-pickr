import Pickr from '@simonwep/pickr'
import VuePickr from "./Pickr.vue";

export interface PickrOptions extends Partial<Omit<Pickr.Options, 'el' | 'swatches' | 'default' | 'theme'>> { }
export interface PickrInstance extends Pickr { }
export interface PickrColor extends Pickr.HSVaColor { }
export type PickrTheme = Pickr.Theme;
export enum PickrChangeSource { Slider, Input, Swatch }
export interface PickrComponent extends InstanceType<typeof VuePickr> { }

export default VuePickr;