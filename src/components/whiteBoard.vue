<template>
    <div class="fixView" style="background-color: #fafafa;">
      <v-card
      class="d-flex flex-row justify-space-between mb-6"
      flat
      tile
      color="#fafafa"
      >
        <!-- <span>123</span>
        <span>321</span>
        <span>333</span> -->
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
          text: '機種名稱/製令名稱',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: '機種代碼', value: 'carbs' },
        { text: '今日生產完成數量', value: 'calories' },
        { text: '製令生產數量', value: 'fat' },
        // { text: '本月目標值PPM', value: 'carbs' },
        // { text: '本月不良率PPM', value: 'protein' },
        // { text: '達成狀況', value: 'iron' },
      ],
      desserts: [
        {
          name: 'model1 / task1',
          calories: 0,
          fat: '200/250',
          carbs: 141,
          protein: 0,
          iron: "已達成",
        },
        {
          name: 'model2 / task2',
          calories: 6,
          fat: '200/250',
          carbs: 141,
          protein: 953,
          iron: '已達成',
        },
        {
          name: 'model3 / task3',
          calories: 0,
          fat: '200/250',
          carbs: 141,
          protein: 0,
          iron: '已達成',
        },
        {
          name: 'model4 / task4',
          calories: 0,
          fat: '200/250',
          carbs: 141,
          protein: 0,
          iron: '已達成',
        },
        {
          name: 'model5 / task5',
          calories: 0,
          fat: '200/250',
          carbs: 141,
          protein: 0,
          iron: '已達成',
        },
        {
          name: 'model6 / task6',
          calories: 0,
          fat: '200/250',
          carbs: 141,
          protein: 0,
          iron: '已達成',
        },
        {
          name: 'model7 / task7',
          calories: 0,
          fat: '200/250',
          carbs: 141,
          protein: 0,
          iron: '已達成',
        },
        // {
        //   name: '資材不良(資材課)',
        //   calories: 0,
        //   fat: 0,
        //   carbs: 2450,
        //   protein: 0,
        //   iron: '已達成',
        // },
        // {
        //   name: '成代不良(成代課)',
        //   calories: 0,
        //   fat: 0,
        //   carbs: 0,
        //   protein: 0,
        //   iron: '已達成',
        // },
        // {
        //   name: '總計不良',
        //   calories: 31,
        //   fat: 4925,
        //   carbs: "",
        //   protein: "",
        //   iron: "",
        // },
      ],
    }
  },
}
</script>

