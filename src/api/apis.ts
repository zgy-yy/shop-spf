import http from "./index";
import {IndexInfo} from "../model";


export function getIndexInfo() {
  return http.get<IndexInfo>('/api/v1/index-infos')
}
