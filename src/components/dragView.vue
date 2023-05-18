<template>
  <div class="container">
    <transition-group class="list" tag="ul" name="drag">
      <li 
        @dragenter="dragenter($event, index)"
        @dragover="dragover($event, index)"
        @dragstart="dragstart(index)"
        draggable
        v-for="( item, index) in list"
        :key="item.label"
        class="list-item"
      >
      {{ item.label }}
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
      };
    },
    created(){

    },
    methods: {
      shuffle(){
        // this.list = this.$shuffle(this.list)
      },
      dragstart(index) {
        this.dragIndex = index;
      },
      dragenter(e, index){
        e.preventDefault();
        if(this.dragIndex != index){
          const source = this.list[this.dragIndex];
          this.list.splice(this.dragIndex, 1);
          this.list.splice(index, 0 ,source);
          this.dragIndex =index;
        }
      },
      dragover(e) {
        e.preventDefault();
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
    cursor: move;
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