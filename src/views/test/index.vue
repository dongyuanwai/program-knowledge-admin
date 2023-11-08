<script lang="ts" setup>
import { onMounted, reactive, watch } from "vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { getQuestionsList } from "@/api/questions";

const state = reactive({
  val: JSON.stringify(""),
  data: undefined,
  showLine: true,
  showLineNumber: true,
  showDoubleQuotes: true,
  showLength: true,
  editable: true,
  showIcon: true,
  editableTrigger: "click",
  deep: 3
});
const data = reactive<any>({
  datatableData: []
});
const getList = () => {
  getQuestionsList().then(res => {
    console.log("[][][", res);
    data.tableData = res;
    state.val = JSON.stringify(data.tableData);
    state.data = data.tableData;
  });
};

watch(
  () => state.data,
  newVal => {
    try {
      state.val = JSON.stringify(newVal);
    } catch (err) {
      // console.log('JSON ERROR');
    }
  }
);
onMounted(() => {
  getList();
});
</script>
<template>
  <div>
    <div>
      <el-table :data="data.tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="id" />
        <el-table-column prop="title" label="title" width="180" />
        <el-table-column prop="explanation" label="explanation" width="180" />
        <el-table-column prop="tagId" label="标签tagId" width="180" />
        <el-table-column prop="createTime" label="创建日期" width="180" />
      </el-table>
    </div>
    <div>
      <el-card shadow="never">
        <template #header>
          <div class="card-header">
            <span class="font-medium">
              从 topicList/list?tagId=2 接口获取的数据
            </span>
          </div>
        </template>
        <div v-if="state.data">
          <VueJsonPretty
            v-model:data="state.data"
            :deep="state.deep"
            :show-double-quotes="state.showDoubleQuotes"
            :show-line="state.showLine"
            :show-length="state.showLength"
            :show-icon="state.showIcon"
            :show-line-number="state.showLineNumber"
            :editable="state.editable"
          />
        </div>
      </el-card>
    </div>
  </div>
</template>
