"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const getAuthToken_1 = __importDefault(require("./getAuthToken"));
const BASE_URL = 'api.zoom.us';
const API_VERSION = '/v2';
class ZoomError extends Error {
    constructor(httpStatusCode, errorCode, message) {
        super();
        this.httpStatusCode = httpStatusCode;
        this.errorCode = errorCode;
        this.message = message;
    }
}
const buildURL = function (url, params) {
    if (!params) {
        return url;
    }
    const sp = new URLSearchParams();
    for (const k in params) {
        if (params[k] !== undefined) {
            sp.set(k, params[k].toString());
        }
    }
    const qs = sp.toString();
    return qs ? `${url}?${sp}` : url;
};
function default_1(zoomApiOpts) {
    return async function zoomRequest(opts) {
        const authToken = await getAuthToken_1.default(zoomApiOpts);
        const requestOpts = {
            method: opts.method,
            hostname: BASE_URL,
            path: API_VERSION + buildURL(opts.path, opts.params),
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${authToken}`
            }
        };
        return await new Promise((resolve, reject) => {
            const httpsRequest = https_1.default.request(requestOpts, (res) => {
                const data = [];
                res.on('data', (chunk) => {
                    data.push(chunk);
                });
                res.on('end', () => {
                    const dataStr = Buffer.concat(data).toString();
                    const body = dataStr ? JSON.parse(dataStr) : {};
                    if (res.statusCode < 200 || res.statusCode >= 300) {
                        reject(new ZoomError(res.statusCode, body.code, body.message));
                    }
                    else {
                        resolve(body);
                    }
                });
            });
            httpsRequest.on('error', (err) => {
                reject(err);
            });
            if (opts.body) {
                httpsRequest.write(JSON.stringify(opts.body));
            }
            httpsRequest.end();
        });
    };
}
exports.default = default_1;
