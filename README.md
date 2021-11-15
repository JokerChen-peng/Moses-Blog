## 面向协议编程，schema 的结构如下

```js
{
  name: 'Page',
  attributes: {
    title: 'Moses 的个人博客系统'
  },
  children: [
    {
      name: 'Banner',
      attributes: {
        title: 'Moses 的个人小站',
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

