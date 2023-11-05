import type { CourseDetails } from './types'
import pages from './pages'
import { readonly, type DeepReadonly } from 'vue'

type PageNames = keyof typeof pages

type ObjectType<T> = T extends 'courseDetails' ? CourseDetails : never

const routeStore = {} as Record<PageNames, unknown>

export function getRouteParams<T extends PageNames>(
  page: T,
): DeepReadonly<ObjectType<T>> {
  const p = routeStore[page] as ObjectType<T>
  return readonly(p)
}

let navigateLock = false
function navigate<T extends PageNames>(
  page: T,
  params?: ObjectType<T>,
): Promise<any> {
  if (navigateLock) return new Promise<any>(
    (resolve, reject) => {}
  )
  const eventName = Math.floor(Math.random() * 1000) + new Date().getTime() + '' // 生成唯一事件名
  navigateLock = true
  routeStore[page] = params
  uni.navigateTo({
    url: `${pages[page]}?eventName=${eventName}`,
    complete() {
      navigateLock = false
    },
  })

  return new Promise<any>(
    (resolve, reject) => (
      uni.$once(eventName, resolve), uni.$once(eventName, reject)
    ),
  )
}

function redirect<T extends PageNames>(page: T, params?: ObjectType<T>) {
  routeStore[page] = params
  uni.redirectTo({ url: pages[page] })
}

function reLaunch<T extends PageNames>(page: T, params?: ObjectType<T>) {
  routeStore[page] = params
  uni.reLaunch({ url: pages[page] })
}

function switchTab<T extends PageNames>(page: T, params?: ObjectType<T>) {
  routeStore[page] = params
  uni.switchTab({ url: pages[page] })
}

interface BackParams {
  /** 返回页面层级 */
  delta?: number
  /** 返回携带的数据 */
  data?: any
}

function back({ delta, data }: BackParams = { delta: 1, data: null }) {
  const currentRoute:any = getCurrentPages().pop() 
  const eventName = currentRoute.options.eventName
  uni.$emit(eventName, data)
  uni.navigateBack({
    delta,
  })
}

const router = {
  navigate,
  redirect,
  reLaunch,
  switchTab,
  back,
}

export default router
