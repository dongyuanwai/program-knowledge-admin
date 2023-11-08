import { http } from "@/utils/http";
// import { baseUrlApi } from "./utils";

type Result = {
  success: boolean;
  data: Array<any>;
};

export const getAsyncRoutes = () => {
  return http.request<Result>("get", "/getAsyncRoutes");
  // 动态获取菜单路由，参数规格：https://yiming_chang.gitee.io/pure-admin-doc/pages/routerMenu/#%E5%8F%AA%E4%BC%A0-path-%E6%A8%A1%E5%BC%8F
  // return http.request<Result>("get", baseUrlApi("directory/list"));
};
