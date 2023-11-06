import MySwiper from './MySwiper.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MySwiper: typeof MySwiper
  }
}
