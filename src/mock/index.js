import Mock from 'mockjs'

import { Random } from 'mockjs'

Random.extend({
    // 自定义函数名: function 函数
    status: function() {
      const arr = ['已完成', '急件', '接洽中', '待聯絡']
      return this.pick(arr)
    },
    image: function() {
        let img = Random.dataImage("300x500", Random.name());
        return img
    }
  })
  
  // 获取商品列表
  Mock.mock('/api/getFakeData', 'get', {
    status: 200,
    message: '获取假資料列表成功！',
    'data|5-10': [
      {
        id: '@increment(1)',      // 自增的Id值
        // 'id|+1': 0,            // 这也是在模拟一个自增长的 Id 值
        title:'@sentence(3)',
        subtitle:'@sentence(3)',
        text:'@sentence(20)',
        status: '@status()',
        isFocus: false,
        image: '@image()'
  
      }
    ]
  })