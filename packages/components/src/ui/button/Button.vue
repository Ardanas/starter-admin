<script setup>
defineOptions({
  name: 'DddButton',
})
import { ref } from 'vue'

const value = ref('')

</script>

<template>
  <div>
      <el-link type="primary">primary</el-link>
    <el-time-select
    v-model="value"
    style="width: 240px"
    start="08:30"
    step="00:15"
    end="18:30"
    placeholder="Select time"
  />
  </div>
</template>
