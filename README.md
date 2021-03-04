# Vue实现美团App仿写
说明：使用Vue搭建美团App的单页应用，实现了美团的首页、点餐页、评价和商家页面，并完成了购物车的添加效果。      
         
## 运用技术
HTML、CSS、Vue、Vue-router、Vuex、axios、ES6、JavaScript     
同时使用了vue的vant组件库完成导航栏吸顶的效果     

## 代码思路
1、安装Vue-cli，使用Vue-cli搭建项目框架      
    在终端中输入vue ui，进入搭建项目的图形化页面，勾选Babel（使ES6转成ES5）、Router（通过路由跳转切换页面）、Vuex（状态数据管理）、css预处理（sass）、ESlint（js代码检查）
    
2、单文件组件和路由管理      
    美团单页面应用由多个单文件组成，如切换点餐页等菜单组件、展示商家的组件、点餐页的菜单组件以及购物车组件等。将这些组件每个都单独列成一个文档，用过import方法，将它们组合在一个完整的页面当中。
    而在美团App仿写中，真正使用路由跳转的页面只有展示商家的首页以及每个商家点餐的详情页，因此router跳转路径只有两条。
   
3、后台数据请求     
    数据请求使用promise和axios相结合
    
4、数据传输    
    使用props完成父组件向子组件传输数据，多个组件的参数共享使用Vuex中的store模式。当然，在路由跳转时，你还可以使用$route获取数据；在发生事件时，你也可以使用$element获取事件的信息
    
