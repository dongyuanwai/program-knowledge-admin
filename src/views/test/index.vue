<template>
  <el-table :data="data.tableData" stripe style="width: 90%">
    <el-table-column prop="id" label="id" />
    <el-table-column prop="title" label="title" width="180" />
    <el-table-column prop="explanation" label="explanation" width="180" />
    <el-table-column prop="tagId" label="标签tagId" width="180" />
    <el-table-column prop="createTime" label="创建日期" width="180" />
  </el-table>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { getQuestionsList } from "@/api/questions";

const data = reactive<any>({
  datatableData: []
});
const getList = () => {
  getQuestionsList().then(res => {
    console.log("[][][", res);
    data.tableData = res;
  });
};

onMounted(() => {
  getList();
});
</script>
