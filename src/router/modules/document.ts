// 最简代码，也就是这些字段必须有
export default {
  path: "/document",
  meta: {
    title: "平台文档",
    rank: 100
  },
  children: [
    {
      path: "/document/index",
      name: "Document",
      component: () => import("@/views/document/index.vue"),
      meta: {
        title: "平台文档"
        // 通过设置showParent为true，显示父级
        // showParent: true
      }
    }
  ]
};
