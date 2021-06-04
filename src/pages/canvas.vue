<template >
    <div class="">
        <canvas id="canvas"></canvas>
    </div>
</template>
<script>
export default {
    data() {
        return{
            
        }
    },
    created() {
        const canvas = document.getElementById('canvas')
        const cxt = canvas.getContext('2d')
        
        // cxt.fillReact()
    },
    methods: {
        
    },
}
</script>
<style lang="less">
    #canvas{
        width: 200px;
        height: 200px;
    }
</style>