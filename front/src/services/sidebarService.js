import { pascalCase } from '~/utils/string'
import { getSidebarJson } from '~/src/models/sidebarModel'

/**
 * sidebar.jsonから必要なデータを取得する
 *
 */
export const getDatas = (name) => {
  const sidebarJson = getSidebarJson()
  return sidebarJson.data[name].map((key) => sidebarJson.items[key])
}

/**
 * Componentの名前を取得する
 *
 * event が logout の場合は LogoutSidebarListItem を返す
 *
 * event がない場合は BaseSidebarListItemを返す
 *
 */
export const getComponentName = (data) =>
  data.event ? `${pascalCase(data.event)}SidebarListItem` : "BaseSidebarListItem"

/**
 * Componentをimportし、vue用のObjectを取得する
 *
 * example
 * {
 *    BaseSidebarListItem: () => import('~/components/organisms/list/BaseSidebarListItem')
 *    LogoutSidebarListItem: () => import('~/components/organisms/list/LogoutSidebarListItem')
 * }
 */
export const importComponents = (name) => {
  const d = getDatas(name)
  return uniqComponentNames(d).reduce(
    (obj, component) => ({
      ...obj,
      [component]: () => import(`~/components/organisms/list/${component}`),
    }), {}
  )
}

/**
 * 一意なコンポーネントの名前の配列を作る
 *
 */
const uniqComponentNames = (datas) => [...new Set(datas.map((key) => getComponentName(key)))]
