"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function getAuthToken(zoomApiOpts) {
    var _a;
    const payload = {
        iss: zoomApiOpts.apiKey
    };
    const options = {
        algorithm: 'HS256',
        expiresIn: (_a = zoomApiOpts.tokenExpiresIn) !== null && _a !== void 0 ? _a : '5s'
    };
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, zoomApiOpts.apiSecret, options, (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
}
exports.default = getAuthToken;
