// 最简代码，也就是这些字段必须有
export default {
  path: "/fighting",
  meta: {
    title: "前端"
  },
  children: [
    {
      path: "/test/index",
      name: "Test",
      component: () => import("@/views/test/index.vue"),
      meta: {
        title: "测试接口"
        // 通过设置showParent为true，显示父级
        // showParent: true
      }
    }
  ]
};
