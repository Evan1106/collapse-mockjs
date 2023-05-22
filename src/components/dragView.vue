<template>
  <div class="container" style="border: solid 1px black;">
    <transition-group class="list" tag="ul" name="drag">
      <li 
        @dragenter="dragenter($event, index)"
        @dragover="dragover($event, index)"
        @dragstart="dragstart(index)"
        :draggable="isdraggable"
        v-for="( item, index) in list"
        :key="item.label"
        class="list-item"
      >
      {{ item.label }}
      <v-icon style="cursor: move;" @mousedown="isdraggable = true">mdi-drag-horizontal</v-icon>
      </li>
    </transition-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list:[
          { label: '列表1' },
          { label: '列表2' },
          { label: '列表3' },
          { label: '列表4' },
          { label: '列表5' },
          { label: '列表6' },
        ],
        dragIndex: '',
        enterIndex:'',
        isdraggable: false,
      };
    },
    created(){

    },
    methods: {
      dragstart(index) {
        this.dragIndex = index;
      },
      dragenter(e, index){
        e.preventDefault();
        if(this.dragIndex != index){
          const source = this.list[this.dragIndex];
          console.log(source)
          this.list.splice(this.dragIndex, 1);
          this.list.splice(index, 0 ,source);
          this.dragIndex =index;
        }
      },
      dragover(e) {
        e.preventDefault();
        this.isdraggable = false
      },
      debounce( func, wait) {
        let timeout;
        // return function() {
          let context = this;
          let args = arguments;
          clearTimeout(timeout)
          timeout = setTimeout(function() {
            func.apply(context, args)
          }, wait)
        // }
      },
      throttled(fn, delay) {
        let timer = null
        let startTime = Date.now()
        // return function() {
          console.log("123")
          let curTime = Date.now()
          let remaining = delay - ( curTime - startTime) // 從上次到現在剩餘多少時間
          let context = this
          let args = arguments
          clearTimeout(timer)
          if( remaining <= 0){
            console.log("yesif")
            fn.apply(context, args)
            startTime = Date.now()
          }else{
            console.log("noIf")
            timer = setTimeout(fn, remaining)
          }
        // }
      }


    }
  }
</script>

<style lang="scss" scoped>
.list {
  list-style: none;
  overflow-y: auto;
  .drag-move {
    transition: transform .3s;
  }
  .list-item{
    width: 300px;
    background: #EA6E59;
    border-radius: 4px;
    color: #FFF;
    margin-bottom: 6px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}

</style>