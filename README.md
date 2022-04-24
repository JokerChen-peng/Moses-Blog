

## [线上地址](http://socks.jrmoses.top/)

## [前台展示页面](https://github.com/JokerChen-peng/my-ssr-backend)

### 管理员账号 Moses chenkunpeng123 （不要乱改配置）

# 项目的介绍

## 背景

SEO 课的一次作业，需要做一个产品的官网

## 承担角色

我们小组六个人，五个运营同学，我自己负责前后端的一个编码，想让不懂代码的运营同学也可以建设网站

## 技术方案

为了方便上线---> 纯云原生的技术 -->用 midway serverless 后端的接口,方便一键部署

为了减少白屏时间和 SEO 的优化 ---> 使用了 SSR 技术  ---> ssr

为了使后台数据变化，前台可以感知到 ---> 面向 schema JSON 编程

<br/>

### 前端

	react + react router + redux 

	ui ---> antd

	**admin下的分层**

```
├───container
│   ├───BasicSetting
│   ├───DetailSetting
│   ├───HomeManagement
│   │   └───component
│   │       ├───AreaItem
│   │       │   └───component
│   │       └───AreaList
│   ├───Login
│   │   ├───components
│   │   └───utils
│   └───types
└───store
```

**schema json 的设计**

```
{
  name: 'Page',
  attributes: {
    title: '青年袜袜屋'
  },
  children: [
    {
      name: 'Banner',
      attributes: {
        title: '青年袜袜屋',
        description: '',
        showSmallPic: true,
        smallPicUrl: '',
        backgroundUrl: '',
        backgroundHeight: '',
      },
      children: []
    },{
      name: 'List',
      attributes: {},
      children: [{
        name: 'Item',
        attributes:{
          title: '',
          description: '',
          imageUrl: '',
          link:''
        },
        children: []
      }]
    },{
      name: 'Footer',
      attributes: {
        copyright: '',
        record: ''
      }
      children: [{
        name: 'Item',
        attributes:{
          title: '',
          link:''
        },
        children: []
      }]
    }
  ]
}
```

### 后端

	midway faas 

	使用云数据库储存 schema 数据 

	**src 下的分层**  负责crud

```
├───config
├───controller
├───dto
├───entity
├───interface
├───middleware
├───mock
├───service
└───util
```

	**web 下的分层** 负责前台页面的样式和服务端请求数据（脱水）

```
├───@types
├───components
│   ├───Banner
│   ├───Bloglist
│   ├───brief
│   ├───common
│   ├───Footer
│   ├───layout
│   ├───player
│   ├───recommend
│   ├───rectangle
│   ├───search
│   └───slider
├───images
├───interface
├───pages
│   ├───404
│   ├───detail
│   └───index
└───store
```

