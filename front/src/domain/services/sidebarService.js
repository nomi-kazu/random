import { pascalCase } from '~/utils/string'
import { getSidebarJson } from '~/src/infra/sidebarJsonInfra'
import SidebarModel from '~/src/domain/models/sidebarModel'

/**
 * sidebar.jsonから必要なデータを取得する
 *
 */
const getDatas = (name) => {
  const sidebarJson = getSidebarJson()
  const sidebar = new SidebarModel(sidebarJson.data[name], sidebarJson.items)
  return sidebar.concatData
}

/**
 * Componentの名前を取得する
 *
 * event が logout の場合は LogoutSidebarListItem を返す
 *
 * event がない場合は BaseSidebarListItemを返す
 *
 */
const getComponentName = (data) =>
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
 const importComponents = (datas) => {
  return uniqComponentNames(datas).reduce(
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

const SidebarService = class {
  constructor(name) {
    this.name = name
    this.datas = getDatas(name)
  }

  componentName (data) {
    return getComponentName(data)
  }

  get importComponents () {
    return importComponents(this.datas)
  }
}

export default SidebarService
