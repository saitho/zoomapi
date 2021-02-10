"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("./util/request"));
function default_1(zoomApiOpts) {
    const zoomRequest = request_1.default(zoomApiOpts);
    const ListUsers = function (params) {
        return zoomRequest({
            method: 'GET',
            path: '/users',
            params: params
        });
    };
    const GetUser = function (userId, params) {
        return zoomRequest({
            method: 'GET',
            path: `/users/${userId}`,
            params: params
        });
    };
    const GetUserToken = function (userId, params) {
        return zoomRequest({
            method: 'GET',
            path: `/users/${userId}/token`,
            params: params
        });
    };
    const CreateUser = function (body) {
        return zoomRequest({
            method: 'POST',
            path: '/users',
            body: body
        });
    };
    const DeleteUser = function (userId, params) {
        return zoomRequest({
            method: 'DELETE',
            path: `/users/${userId}`,
            params: params
        });
    };
    const UpdatePresenceStatus = function (userId, body) {
        return zoomRequest({
            method: 'PUT',
            path: `/users/${userId}/presence_status`,
            body: body
        });
    };
    return {
        ListUsers,
        GetUser,
        GetUserToken,
        CreateUser,
        DeleteUser,
        UpdatePresenceStatus
    };
}
exports.default = default_1;
