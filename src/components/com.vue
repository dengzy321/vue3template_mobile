<template>
    <div>
        <button @click="onHandle">按钮</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        msg:{
            type: String,
            required: true
        }
    },
    methods: {
        onHandle(){
            this.$emit('no-change', {name: '我是com组件'})
        }
    },
}
</script>