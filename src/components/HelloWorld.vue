<template>
  <div class="testing">
    <div class="card">
      <v-row justify="center">
        <!-- <v-btn v-on:click="handleChange"> test </v-btn> -->
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header disable-icon-rotate>
              <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <template v-slot:actions>
              <v-icon color="error">
                mdi-alert-circle1
              </v-icon>
            </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div>Info 1：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <br>
              <div>Info 2：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        
        
        <v-expand-transition>
        <v-card
          v-show="expand"
          height="100"
          width="100"
          class="mx-auto secondary"
        ></v-card>
      </v-expand-transition>
      </v-row>
    </div>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        expand: false
      }
    },
    methods: {
      handleChange(val) {
        console.log(val)
        this.expand = !this.expand
      }
    },
  }
</script>

<style>
.card {
  width: 400px;
  padding: 30px;
}
</style>