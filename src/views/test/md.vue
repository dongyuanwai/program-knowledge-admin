<script lang="ts" setup>
import { reactive } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const post = reactive({
  content: "这是Markdown编辑器"
});
</script>
<template>
  <div>
    <el-card shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium"> Markdown编辑器</span>
        </div>
      </template>
      <div>
        <MdEditor
          v-model="post.content"
          :theme="false ? 'dark' : 'light'"
          style="height: calc(100vh - 305px)"
        />
      </div>
    </el-card>
  </div>
</template>
