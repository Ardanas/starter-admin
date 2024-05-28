<script setup>
// import request, { getMaps } from '@ddd/apis';

import { Button } from '@ddd/components';
</script>
<template>
  <div>
    <Button />
    <el-tag>hello</el-tag>
    <el-button type='primary'>world</el-button>
  </div>
</template>


<route lang="yaml">
meta:
  layout: default
</route>