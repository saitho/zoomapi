"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./users"));
const meetings_1 = __importDefault(require("./meetings"));
const webinars_1 = __importDefault(require("./webinars"));
function default_1(zoomApiOpts) {
    return {
        users: users_1.default(zoomApiOpts),
        meetings: meetings_1.default(zoomApiOpts),
        webinars: webinars_1.default(zoomApiOpts)
    };
}
exports.default = default_1;
__exportStar(require("./webhooks"), exports);
__exportStar(require("./common"), exports);
__exportStar(require("./users"), exports);
__exportStar(require("./meetings"), exports);
