"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("./util/request"));
function default_1(zoomApiOpts) {
    const zoomRequest = request_1.default(zoomApiOpts);
    const ListMeetings = function (userId, params) {
        return zoomRequest({
            method: 'GET',
            path: `/users/${userId}/meetings`,
            params: params
        });
    };
    const CreateMeeting = function (userId, meeting) {
        return zoomRequest({
            method: 'POST',
            path: `/users/${userId}/meetings`,
            body: meeting
        });
    };
    const GetMeeting = function (meetingId, params) {
        return zoomRequest({
            method: 'GET',
            path: `/meetings/${meetingId}`,
            params: params
        });
    };
    const UpdateMeeting = function (meetingId, meeting, params) {
        return zoomRequest({
            method: 'PATCH',
            path: `/meetings/${meetingId}`,
            params: params,
            body: meeting
        });
    };
    const UpdateMeetingStatus = function (meetingId, body) {
        return zoomRequest({
            method: 'PUT',
            path: `/meetings/${meetingId}/status`,
            body: body
        });
    };
    const DeleteMeeting = function (meetingId, params) {
        return zoomRequest({
            method: 'DELETE',
            path: `/meetings/${meetingId}`,
            params: params
        });
    };
    const ListRegistrants = function (meetingId, params) {
        return zoomRequest({
            method: 'GET',
            path: `/meetings/${meetingId}/registrants`,
            params: params
        });
    };
    const AddRegistrant = function (meetingId, registrant, params) {
        return zoomRequest({
            method: 'POST',
            path: `/meetings/${meetingId}/registrants`,
            params: params,
            body: registrant
        });
    };
    const UpdateRegistrantStatus = function (meetingId, body, params) {
        return zoomRequest({
            method: 'PUT',
            path: `/meetings/${meetingId}/registrants/status`,
            params: params,
            body: body
        });
    };
    const GetMeetingInvitation = function (meetingId) {
        return zoomRequest({
            method: 'GET',
            path: `/meetings/${meetingId}/invitation`,
        });
    };
    const GetMeetingRecordings = function (meetingId) {
        return zoomRequest({
            method: 'GET',
            path: `/meetings/${meetingId}/recordings`,
        });
    };
    return {
        ListMeetings,
        CreateMeeting,
        GetMeeting,
        UpdateMeeting,
        UpdateMeetingStatus,
        DeleteMeeting,
        ListRegistrants,
        AddRegistrant,
        UpdateRegistrantStatus,
        GetMeetingInvitation,
        GetMeetingRecordings
    };
}
exports.default = default_1;
