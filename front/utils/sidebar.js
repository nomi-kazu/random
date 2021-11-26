import SidebarJson from '~/assets/json/Sidebar.json'

/**
 * 必要なデータを作る
 */
export const getDatas = (name) =>
  SidebarJson.data[name].map((key) => SidebarJson.items[key])

/**
 * 一意なコンポーネントの名前の配列を作る
 */
const uniqComponentNames = (datas) => [...new Set(datas.map((key) => getComponentName(key)))]

/**
 * Componentの名前を取得する
 */
export const getComponentName = (data) =>
  data.event
    ? data.event.charAt(0).toUpperCase() + data.event.slice(1).toLowerCase() + "SidebarListItem"
    : "BaseSidebarListItem"

/**
 * Componentをimportする
 */
export const importComponents = (name) => {
  const d = getDatas(name)
  return uniqComponentNames(d).reduce((obj, component) => ({
  ...obj, [component]: () => import(`~/components/organisms/list/${component}`)
  }), {})
}