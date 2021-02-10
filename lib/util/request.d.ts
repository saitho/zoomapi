import { ZoomOptions } from '../';
declare type QueryParams = {
    [key: string]: string | number | boolean;
};
declare type ZoomRequestOpts = {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    params?: QueryParams;
    body?: object;
};
export default function (zoomApiOpts: ZoomOptions): <T>(opts: ZoomRequestOpts) => Promise<T>;
export {};
