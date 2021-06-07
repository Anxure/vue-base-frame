export const menuTree = [
  {
    title: '工作台',
    name: 'workplace',
    path: '/workplace',
    icon: 'gongzuotai'
  },
  {
    title: '表单页',
    name: 'form',
    path: '/form',
    icon: 'biaodan',
    children: [
      {
        title: '基础表单',
        name: 'base-form',
        path: '/form/base-form'
      },
      {
        title: '高级表单',
        name: 'advanced-form',
        path: '/form/advanced-form'
      }
    ]
  },
  {
    title: '异常页',
    name: 'exception',
    path: '/exception',
    icon: 'yichangguanli',
    children: [
      {
        title: '403',
        name: '403',
        path: '/exception/403'
      },
      {
        title: '404',
        name: '404',
        path: '/exception/404'
      }
    ]
  }
]
export const testMenuTree = [
  {
    title: '工作台',
    name: 'dash',
    path: '/workplace',
    icon: 'gongzuotai'
  },
  {
    title: '表单页',
    name: 'form',
    path: '/form',
    icon: 'biaodan',
    children: [
      {
        title: '基础表单',
        name: 'base-form',
        path: '/form/base-form'
      },
      // {
      //   title: '高级表单',
      //   name: 'advanced-form',
      //   path: '/form/advanced-form'
      // }
    ]
  },
  {
    title: '异常页',
    name: 'exception',
    path: '/exception',
    icon: 'yichangguanli',
    children: [
      {
        title: '403',
        name: '403',
        path: '/exception/403'
      },
      {
        title: '404',
        name: '404',
        path: '/exception/404'
      }
    ]
  }
]