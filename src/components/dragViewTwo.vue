<template>
  <!--使用draggable组件-->
  <div class="itxst">
    <div class="col">
      <draggable v-model="arr1" handle=".mover" animation="300" @start="onStart" @end="onEnd">
          <transition-group>
            <div class="item" v-for="item in arr1" :key="item.id">
              <v-icon class="mover" style="cursor: move;" @mousedown="isdraggable = true">mdi-drag-horizontal</v-icon>
              {{ item.name }}
            </div>
          </transition-group>
      </draggable> 
    </div>
  </div>
</template>

<script>
//导入draggable组件
import draggable from 'vuedraggable'
export default {
  //注册draggable组件
  components: {
    draggable,
  },
  data() {
    return {
      //定义要被拖拽对象的数组
      arr1:[
        {id:1,name:'www.itxst.com'},
        {id:2,name:'www.jd.com'},
        {id:3,name:'www.baidu.com'},
        {id:4,name:'www.taobao.com'}
      ],
    };
  },
  methods: {
     //开始拖拽事件
      onStart(){
        // this.drag=true;
      },
      //拖拽结束事件
       onEnd() {
      //  this.drag=false;
    },
  },
};
</script>

<style scoped>
  /*定义要拖拽元素的样式*/
.itxst {
    margin: 10px;
}
.col {
  width: 80%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}
.col + .col {
  margin-left: 10px;
}
.item {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: #f1f1f1;
  text-align: left;
}
.item + .item {
  border-top: none;
  margin-top: 6px;
}
.mover {
  cursor: move;
  padding:3px 6px;
}
</style>