<template>
    <div class="loading" v-if="isShow">
        <div class="test">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
            <span class="font"> {{ message }} </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            message: 'Loading',
        }
    },
    methods: {
        showLoading(msg) {
            this.message = msg
            this.isShow = true
        },
        hideLoading() {
            this.isShow = false
        }
    }
}

</script>

<style scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: .8;    
}
.font {
    font-size: x-large;
    color: white;
}
.test {
    width: 100%;
    height: 100%;
    /* z-index: 99; */
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>