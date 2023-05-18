<template>
    <div class="fixView" style="background-color: #fafafa;">
      <div class="input_ctrl" style="width:220px;margin-left:450px;">
          <v-menu
          ref="menu2"
          v-model="menu2"
          :close-on-content-click="false"
          :return-value.sync="dates"
          transition="scale-transition"
          offset-y
          min-width="auto"
          >
              <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      class="pl-3"
                      solo
                      dense
                      v-model="dateRangeText"
                      placeholder="選擇生產日期區間"
                      v-bind="attrs"
                      v-on="on"
                      readonly
                  ></v-text-field>
              </template>
              <v-date-picker
              v-model="dates"
              no-title
              scrollable
              range
              color="#f47e1b"
              >
              <v-btn
                  text
                  color="#f47e1b"
                  @click="menu2 = false"
              >
                  Cancel
              </v-btn>
              <v-btn
                  text
                  color="#f47e1b"
                  @click="$refs.menu2.save(dates)"
              >
                  OK
              </v-btn>
              </v-date-picker>
          </v-menu>
      </div>
      <v-card
      class="d-flex flex-row justify-space-between mb-6"
      flat
      tile
      color="#fafafa"
    >
      <span>總生產數量：6295</span>
      <span>總不良台數：31</span>
      <span>總不良率：0.49%</span>
    </v-card>      
      <v-data-table
        :headers="headers"
        :items="desserts"
        disable-pagination
        hide-default-footer
        class="elevation-1"
      ></v-data-table>        
    </div>

  </template>

<script>
export default {
  computed: {
        dateRangeText () {
            return this.dates.join(' ~ ')
      },
    },
  data () {
    return {
      dates:[],
      menu2: false,
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: '數量', value: 'calories' },
        { text: '不良率PPM', value: 'fat' },
        { text: '本月目標值PPM', value: 'carbs' },
        { text: '本月不良率PPM', value: 'protein' },
        { text: '達成狀況', value: 'iron' },
      ],
      desserts: [
        {
          name: '製造不良(製造課)',
          calories: 0,
          fat: 0,
          carbs: 70,
          protein: 0,
          iron: "已達成",
        },
        {
          name: 'PCB不良(PCB組立)',
          calories: 6,
          fat: 953,
          carbs: 1850,
          protein: 953,
          iron: '已達成',
        },
        {
          name: '開發不良(開發課)',
          calories: 0,
          fat: 0,
          carbs: 30,
          protein: 0,
          iron: '已達成',
        },
        {
          name: '資材不良(資材課)',
          calories: 0,
          fat: 0,
          carbs: 2450,
          protein: 0,
          iron: '已達成',
        },
        {
          name: '成代不良(成代課)',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
          iron: '已達成',
        },
        {
          name: '總計不良',
          calories: 31,
          fat: 4925,
          carbs: "",
          protein: "",
          iron: "",
        },
      ],
    }
  },
}
</script>

