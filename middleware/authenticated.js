/**
 * 验证是否登录的中间件
 */
 export default function ({ store, redirect }) {
  // redirect重定向方法
  // store获取到数据
  // If the user is not authenticated
  if (!store.state.user) {
    return redirect('/login')
  }
}
