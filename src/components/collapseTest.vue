<template>
    <div class="collapse d-flex">
        <v-row>
            <v-col  :id="item.id" v-for="(item,index) in fakeData" :key="index" style="padding: 20px;" v-on:click="showInfo(item)" cols="6">
                <v-card v-if="!(item.isFocus)" max-width="250">
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    height="150"
                    width="250"
                    :src="item.image"
                    ></v-img>
                </v-card>
                <v-card v-if="item.isFocus" max-width="500">   
                    <v-img
                        lazy-src="https://picsum.photos/id/11/10/6"
                        height="300"
                        width="500"
                        :src="item.image"
                    ></v-img>

                    <v-card-title>
                    {{ item.title }}
                    </v-card-title>

                    <v-card-subtitle>
                    {{ item.subtitle }}
                    </v-card-subtitle>
                    <v-card-text>
                        {{ item.text }}
                    </v-card-text>        
                </v-card>
            </v-col>
        </v-row>
        <div :id="item.id" v-for="(item,index) in fakeData" :key="index" style="padding: 20px;" v-on:click="showInfo(item)">
        <!-- <v-card v-if="!(item.isFocus)" max-width="250">
            <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            height="150"
            width="250"
            :src="item.image"
            ></v-img>
        </v-card>
        <v-card v-if="item.isFocus" max-width="500">   
            <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                height="300"
                width="500"
                :src="item.image"
            ></v-img>

            <v-card-title>
            {{ item.title }}
            </v-card-title>

            <v-card-subtitle>
            {{ item.subtitle }}
            </v-card-subtitle>
            <v-card-text>
                {{ item.text }}
            </v-card-text>        
        </v-card> -->
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
        this.getFakeData();
    },
    destroyed() {
        document.addEventListener('click', this.handleClickOutside);
    },
    data() {
        return {
            isFocus: false,
            fakeData:[],


        }
    },
    methods: {
        showInfo(event) {
            for(let i = 0;i< this.fakeData.length; i++){
                if(this.fakeData[i].id == event.id){
                    this.fakeData[i].isFocus = !this.fakeData[i].isFocus;
                }
            }
            
        },
        handleClickOutside(event) {
            if(!this.$el.contains(event.target.value)){
                for(let i = 0; i< this.fakeData.length;i++){
                    // this.fakeData[i].isFocus = false
                }
            }
        },
        async getFakeData() {
            const { data: res } = await this.$http.get('/api/getFakeData')
            // console.log(res.data)
            this.fakeData = res.data;
        },
    },
}
</script>