"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("./util/request"));
function default_1(zoomApiOpts) {
    const zoomRequest = request_1.default(zoomApiOpts);
    const ListWebinars = function (userId, params) {
        return zoomRequest({
            method: 'GET',
            path: `/users/${userId}/webinars`,
            params: params
        });
    };
    const CreateWebinar = function (userId, webinar) {
        return zoomRequest({
            method: 'POST',
            path: `/users/${userId}/webinars`,
            body: webinar
        });
    };
    const GetWebinar = function (webinarId, params) {
        return zoomRequest({
            method: 'GET',
            path: `/webinars/${webinarId}`,
            params: params
        });
    };
    const UpdateWebinar = function (webinarId, webinar, params) {
        return zoomRequest({
            method: 'PATCH',
            path: `/webinars/${webinarId}`,
            params: params,
            body: webinar
        });
    };
    const DeleteWebinar = function (webinarId, params) {
        return zoomRequest({
            method: 'DELETE',
            path: `/webinars/${webinarId}`,
            params: params
        });
    };
    const ListPanelists = function (webinarId) {
        return zoomRequest({
            method: 'GET',
            path: `/webinars/${webinarId}/panelists`
        });
    };
    const AddPanelists = function (webinarId, panelists) {
        return zoomRequest({
            method: 'POST',
            path: `/webinars/${webinarId}/panelists`,
            body: { panelists: panelists }
        });
    };
    const RemovePanelists = function (webinarId) {
        return zoomRequest({
            method: 'DELETE',
            path: `/webinars/${webinarId}/panelists`
        });
    };
    const RemoveAPanelist = function (webinarId, panelistId) {
        return zoomRequest({
            method: 'DELETE',
            path: `/webinars/${webinarId}/panelists/${panelistId}`
        });
    };
    const ListWebinarRegistrants = function (webinarId, params) {
        return zoomRequest({
            method: 'GET',
            path: `/webinars/${webinarId}/registrants`,
            params: params
        });
    };
    const AddWebinarRegistrant = function (webinarId, registrant, params) {
        return zoomRequest({
            method: 'POST',
            path: `/webinars/${webinarId}/registrants`,
            params: params,
            body: registrant
        });
    };
    const UpdateWebinarRegistrantStatus = function (webinarId, body, params) {
        return zoomRequest({
            method: 'PUT',
            path: `/webinars/${webinarId}/registrants/status`,
            params: params,
            body: body
        });
    };
    const ListPastWebinarQA = function (webinarId) {
        return zoomRequest({
            method: 'GET',
            path: `/past_webinars/${webinarId}/qa`
        });
    };
    return {
        ListWebinars,
        CreateWebinar,
        GetWebinar,
        UpdateWebinar,
        DeleteWebinar,
        ListPanelists,
        AddPanelists,
        RemovePanelists,
        RemoveAPanelist,
        ListWebinarRegistrants,
        AddWebinarRegistrant,
        UpdateWebinarRegistrantStatus,
        ListPastWebinarQA
    };
}
exports.default = default_1;
