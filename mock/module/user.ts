import { resultSuccess, resultError, getJson, getQueryParameters } from '../util'
import { menuTree, testMenuTree } from './menu'
import Mock from 'mockjs'
const defaultUserInfo = [
  {
    id: '1',
    username: 'admin',
    desc: '充满活力的胖子',
    realNanme: 'Anxure',
    password: '123456',
    token: 'token1',
  },
  {
    id: '2',
    username: 'test',
    desc: '充满活力的胖子',
    realNanme: 'Test',
    password: '123456',
    token: 'token2',
  }
]
const userInfo = ({ body }) => {
  console.log('%cuser.ts line:22 body', 'color: #007acc;', body);
  const { username, password } = getJson(body)
  const checkUser = defaultUserInfo.find(item => (item.username === username && item.password === password))
  if (!checkUser) {
    return resultError('用户名或者密码错误')
  }
  return resultSuccess({
    ...checkUser,
    password: ''
  })
}
const getMenuTree = options => {
  const queryParameters = getQueryParameters(options)
  const { id } = queryParameters
  let menu = []
  if (id === '1') {
    menu = menuTree
  } else {
    menu = testMenuTree
  }
  return resultSuccess([
    ...menu
  ])
}
Mock.mock(/\/login/, 'post', userInfo)
Mock.mock(/\/getMenuTree/, 'get', getMenuTree)