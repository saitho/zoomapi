import { ZoomOptions } from './common';
export default function (zoomApiOpts: ZoomOptions): {
    users: {
        ListUsers: (params?: import("./users").ListUsersParams) => Promise<import("./users").ListUserResponse>;
        GetUser: (userId: string, params?: import("./users").GetUserParams) => Promise<import("./users").User>;
        GetUserToken: (userId: string, params?: import("./users").GetUserTokenParams) => Promise<import("./users").GetUserTokenResponse>;
        CreateUser: (body: import("./users").CreateUserBody) => Promise<import("./users").CreateUserResponse>;
        DeleteUser: (userId: string, params?: import("./users").DeleteUserParams) => Promise<{}>;
        UpdatePresenceStatus: (userId: string, body?: import("./users").UpdatePresenceStatusBody) => Promise<{}>;
    };
    meetings: {
        ListMeetings: (userId: string, params?: import("./meetings").ListMeetingsParams) => Promise<import("./meetings").ListMeetingsResponse>;
        CreateMeeting: (userId: string, meeting: import("./meetings").Meeting) => Promise<import("./meetings").Meeting>;
        GetMeeting: (meetingId: string, params?: import("./meetings").GetMeetingParams) => Promise<import("./meetings").Meeting>;
        UpdateMeeting: (meetingId: string, meeting: import("./meetings").Meeting, params?: import("./meetings").GetMeetingParams) => Promise<{}>;
        UpdateMeetingStatus: (meetingId: string, body: import("./meetings").UpdateMeetingStatusParams) => Promise<{}>;
        DeleteMeeting: (meetingId: string, params?: import("./meetings").DeleteMeetingParams) => Promise<{}>;
        ListRegistrants: (meetingId: string, params?: import("./common").ListRegistrantsParams) => Promise<import("./common").ListRegistrantsResponse>;
        AddRegistrant: (meetingId: string, registrant: import("./common").Registrant, params?: import("./common").AddRegistrantParams) => Promise<import("./common").AddRegistrantResponse>;
        UpdateRegistrantStatus: (meetingId: string, body: import("./common").UpdateRegistrantStatusBody, params?: import("./common").UpdateRegistrantStatusParams) => Promise<{}>;
        GetMeetingInvitation: (meetingId: string) => Promise<import("./meetings").GetMeetingInvitationResponse>;
        GetMeetingRecordings: (meetingId: string) => Promise<import("./meetings").GetMeetingRecordingsResponse>;
    };
    webinars: {
        ListWebinars: (userId: string, params?: import("./webinars").ListWebinarsParams) => Promise<import("./webinars").ListWebinarsResponse>;
        CreateWebinar: (userId: string, webinar: import("./webinars").Webinar) => Promise<import("./webinars").Webinar>;
        GetWebinar: (webinarId: string, params?: import("./webinars").GetWebinarParams) => Promise<import("./webinars").ListWebinarsResponse>;
        UpdateWebinar: (webinarId: string, webinar: import("./webinars").Webinar, params?: Pick<import("./webinars").GetWebinarParams, "occurrence_id">) => Promise<{}>;
        DeleteWebinar: (webinarId: string, params?: Pick<import("./webinars").GetWebinarParams, "occurrence_id">) => Promise<{}>;
        ListPanelists: (webinarId: string) => Promise<import("./webinars").ListPanelistsResponse>;
        AddPanelists: (webinarId: string, panelists: Pick<import("./webinars").WebinarPanelist, "email" | "name">[]) => Promise<{}>;
        RemovePanelists: (webinarId: string) => Promise<{}>;
        RemoveAPanelist: (webinarId: string, panelistId: string) => Promise<{}>;
        ListWebinarRegistrants: (webinarId: string, params?: import("./common").ListRegistrantsParams) => Promise<import("./common").ListRegistrantsResponse>;
        AddWebinarRegistrant: (webinarId: string, registrant: import("./common").Registrant, params?: import("./common").AddRegistrantParams) => Promise<import("./common").AddRegistrantResponse>;
        UpdateWebinarRegistrantStatus: (webinarId: string, body: import("./common").UpdateRegistrantStatusBody, params?: import("./common").UpdateRegistrantStatusParams) => Promise<{}>;
        ListPastWebinarQA: (webinarId: string) => Promise<import("./webinars").WebinarQAResponse>;
    };
};
export * from './webhooks';
export * from './common';
export * from './users';
export * from './meetings';
