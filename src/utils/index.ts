import { MenuModel } from '@/api/model/userModel'
/**
 * @description: 根据单标签选中项获取所有展开的父级
 * @param {string} name 当前选中项的name
 * @return {atrray}  返回当前所有的父级数组
 */
function getOpenKeys(menuTree: MenuModel, name: string) {
  menuTree.map(item => {
    if (item.name === name) {
      return item
    } else {
      getOpenKeys(item.children, name)
    }
  })
}
export {
  getOpenKeys
}