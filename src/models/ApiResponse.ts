import {ApiResponseInfo} from "./ApiResponseInfo";

export class ApiResponse<T> {
    info!: ApiResponseInfo;
    results!: T;
}
