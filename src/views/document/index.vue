<script lang="ts" setup>
defineOptions({
  name: "Document"
});
</script>
<template>
  <div>
    <el-card shadow="never" class="h-full">
      <template #header>
        <div class="card-header">
          <span>插件文档</span>
        </div>
      </template>
      <div>
        <div class="mb-8">
          <h1>JONS展示</h1>
          <div>
            使用的是 vue-json-pretty 插件:
            <el-link
              href="https://github.com/leezng/vue-json-pretty"
              target="_blank"
              type="primary"
              >Github链接</el-link
            >
          </div>
        </div>
        <div class="mb-8">
          <h1>md编辑器</h1>
          <div>
            使用的是 md-editor-v3插件:
            <el-link
              class="mr-4"
              href="https://github.com/imzbf/md-editor-v3"
              target="_blank"
              type="primary"
              >Github链接</el-link
            >

            <el-link
              class="mr-4"
              href="https://imzbf.github.io/md-editor-v3/zh-CN/index"
              target="_blank"
              type="primary"
              >官方文档</el-link
            >
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
