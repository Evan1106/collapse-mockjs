<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h3
          ref="radio"
          class="text-h5"
        >
          Target
        </h3>

        <v-radio-group
          v-model="type"
          row
        >
          <v-radio
            label="Number"
            value="number"
          ></v-radio>

          <v-radio
            label="Selector"
            value="selector"
          ></v-radio>

          <v-radio
            label="DOMElement"
            value="element"
          ></v-radio>
        </v-radio-group>

        <v-text-field
          v-if="type === 'number'"
          v-model="number"
          type="number"
          label="Number"
        ></v-text-field>

        <!-- <v-select
          v-if="type === 'selector'"
          v-model="selector"
          label="Selector"
          :items="selections"
        ></v-select> -->
        <input
          v-if="type === 'selector'"
          v-model="selector"
          label="Selector"
          style="background-color: #fafafa;"
          placeholder="try me"
          v-on:keyup.enter="gotoSelectedDiv"
        >

        <v-select
          v-if="type === 'element'"
          v-model="selected"
          :items="elements"
          label="DOMElement"
        ></v-select>
      </v-col>

      <!-- <v-col cols="12">
        <h3 class="text-h5">
          Options
        </h3>

        <v-select
          v-model="easing"
          :items="easings"
          label="Easing"
        ></v-select>

        <v-slider
          v-model="duration"
          min="0"
          max="1000"
          label="Duration"
          thumb-label
        ></v-slider>

        <v-slider
          v-model="offset"
          min="-500"
          max="500"
          label="Offset"
          thumb-label
        ></v-slider>
      </v-col> -->

      <v-col>
        <v-btn
          ref="button"
          block
          color="primary"
          @click="gotoSelectedDiv"
        >
          scroll
        </v-btn>
      </v-col>
    </v-row>
    <div id="myTest" style="height: 100vh; overflow-y: auto;">
      <div v-for="(n , i) in 500" :key="i" :id="'id'+n" :class="'fir'+i" style="height: 250px; background-color: #fafafa; border: 1px red solid;">{{ i }}</div>

    </div>
  </v-container>
</template>

<script>
  import * as easings from 'vuetify/lib/services/goto/easing-patterns'

  export default {
    data () {
      return {
        type: 'number',
        number: 9999,
        selector: '',
        selections: ['.fir250', '.fir480', '.fir200'],
        selected: 'Button',
        elements: ['Button', 'Radio group'],
        duration: 1300,
        offset: 0,
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),
      }
    },
    computed: {
      target () {
        const value = this[this.type]
        if (!isNaN(value)) return Number(value)
        else return value
      },
      options () {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing,
          container: ''
        }
      },
      element () {
        if (this.selected === 'Button') return this.$refs.button
        else if (this.selected === 'Radio group') return this.$refs.radio
        else return null
      },
    },
    methods: {
      gotoSelectedDiv() {
        this.$vuetify.goTo(this.target, {container: '#myTest'})
      }
    }
  }
</script>