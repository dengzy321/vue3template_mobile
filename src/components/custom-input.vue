<template>
    <div>
        <p>这是input自定义组件</p>
        <input
            placeholder="请输入"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>
<script>
export default {
  props: ["modelValue"],
  data() {
    return {};
  },
  methods: {}
};
</script>