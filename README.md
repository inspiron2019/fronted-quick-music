# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 后端

- 数据
- 文件
- 敏感逻辑[比如：权限]
- 后端运维[负载均衡、DB运维、网络防护、异地容灾]

## 云开发

- 云数据库
- 云函数[微信私有协议天然鉴权]----> 云调用[免鉴权调用小程序开放能力] 、http api----> 后端访问云资源
- 云存储

## serverless

- 打破物理隔离
- 函数即服务
- 云端化
前端---服务器端---后端

## git操作
- 如何添加忽略文件
- 如何解决diff
- 如何本地创建分支上传云端[git push origin dev:dev]

## $nextTick 在下次DOM更新结束之后，执行延迟回调

- 比如获取tree树节点展开的后的子节点个数
- 关于table的多表头与拖拽表头的冲突
- 层级较深对象的修改，$set的使用规范
- 关于树结构，:key的使用规范
- $refs
- vuex
- slot
- render
- active
- router
- watch
- computed
- 多页面应用

## 智能访客运营系统总结

- 利用render自定义Tree组件的节点内容，借助$nextTick在节点展开时判断节点横向纵向展示
- 利用render自定义多表头、拖拽，单击下拉菜单，双击修改标题内容
- 封装百度地图组件
- 封装搜索展示列表组件
- 解决iview退出登录时tagNav没有清除，无法根据权限控制菜单


## 参考文档

- [如何上传本地项目到github](https://www.cnblogs.com/smfx1314/p/8426115.html)
- [如何关联某个分支](https://blog.csdn.net/u010059669/article/details/82670484?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control)
- [如何使用iconfont](https://www.cnblogs.com/chenmz1995/p/11373104.html)