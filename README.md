# angular-ngRoute
这是一个在angular的项目中，路由管理的一个小练习。

### route注意事项

1.bower 安装angular-route 并且把angular和angular-route都引入到页面当中
2.将route提供的模块依赖到我们主模块当中 ["ngRoute"]
3.配置路由 在主文件当中配置路由app.js
4.config 首先配置需要的信息 $routeProvider服务
5.$routeProvider.when("路径",{templateUrl:url,controller:"name"})
6.应该在主页面当中指定视图容器 ng-view
