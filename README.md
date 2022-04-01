## 面向协议编程，schema 的结构如下、

## [线上地址](http://socks.jrmoses.top/)

## [前台展示页面](https://github.com/JokerChen-peng/my-ssr-backend)


```js
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

