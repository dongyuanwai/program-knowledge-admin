import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

export const getQuestionsList = () => {
  // http://43.143.134.60:8081/topicList/list?tagId=2
  return http.request<any>("get", baseUrlApi("topicList/list?tagId=2"));
};
