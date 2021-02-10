import { ZoomOptions, PaginatedResponse, TrackingField, Occurrence, ApprovalType, RegistrationType, Audio, AudioRecording, Recurrence, ListResponse, ListRegistrantsParams, ListRegistrantsResponse, Registrant, AddRegistrantParams, AddRegistrantResponse, UpdateRegistrantStatusBody, UpdateRegistrantStatusParams } from './common';
/**
 * 5 - Webinar
 * 6 - Recurring webinar with no fixed time
 * 9 - Recurring webinar with a fixed time
 */
export declare type WebinarType = 5 | 6 | 9;
export declare type WebinarSettings = {
    host_video?: boolean;
    panelists_video?: boolean;
    practice_session?: boolean;
    hd_video?: boolean;
    approval_type?: ApprovalType;
    registration_type?: RegistrationType;
    audio?: Audio;
    auto_recording?: AudioRecording;
    alternative_hosts?: string;
    close_registration?: boolean;
    show_share_button?: boolean;
    allow_multiple_devices?: boolean;
    on_demand?: boolean;
    global_dial_in_countries?: string[];
    contact_name?: string;
    contact_email?: string;
    registrants_confirmation_email?: boolean;
    registrants_restrict_number?: number;
    notify_registrants?: boolean;
    post_webinar_survey?: boolean;
    survey_url?: string;
    registrants_email_notification?: boolean;
    meeting_authentication?: boolean;
    authentication_option?: string;
    authentication_domains?: string;
    authentication_name?: string;
};
export declare type Webinar = {
    uuid?: string;
    id?: number;
    host_id?: string;
    topic?: string;
    type?: WebinarType;
    duration?: number;
    timezone?: string;
    created_at?: string;
    join_url?: string;
    agenda?: string;
    start_time?: string;
    start_url?: string;
    tracking_fields?: TrackingField[];
    occurrences?: Occurrence[];
    settings?: WebinarSettings;
    recurrence?: Recurrence;
    password?: string;
};
export declare type ListWebinarsParams = {
    page_size?: number;
    page_number?: number;
};
export declare type ListWebinarsResponse = PaginatedResponse & {
    webinars: Webinar[];
};
export declare type GetWebinarParams = {
    occurrence_id?: string;
    show_previous_occurrences?: boolean;
};
export declare type WebinarPanelist = {
    id?: string;
    email: string;
    name: string;
    join_url?: string;
};
export declare type ListPanelistsResponse = ListResponse & {
    panelists: WebinarPanelist[];
};
export declare type WebinarQADetails = {
    question: string;
    answer: string;
};
export declare type WebinarQA = {
    name: string;
    email: string;
    question_details: WebinarQADetails[];
};
export declare type WebinarQAResponse = Pick<Webinar, 'id' | 'uuid' | 'start_time'> & {
    questions: WebinarQA[];
};
export default function (zoomApiOpts: ZoomOptions): {
    ListWebinars: (userId: string, params?: ListWebinarsParams) => Promise<ListWebinarsResponse>;
    CreateWebinar: (userId: string, webinar: Webinar) => Promise<Webinar>;
    GetWebinar: (webinarId: string, params?: GetWebinarParams) => Promise<ListWebinarsResponse>;
    UpdateWebinar: (webinarId: string, webinar: Webinar, params?: Pick<GetWebinarParams, 'occurrence_id'>) => Promise<{}>;
    DeleteWebinar: (webinarId: string, params?: Pick<GetWebinarParams, 'occurrence_id'>) => Promise<{}>;
    ListPanelists: (webinarId: string) => Promise<ListPanelistsResponse>;
    AddPanelists: (webinarId: string, panelists: Pick<WebinarPanelist, 'name' | 'email'>[]) => Promise<{}>;
    RemovePanelists: (webinarId: string) => Promise<{}>;
    RemoveAPanelist: (webinarId: string, panelistId: string) => Promise<{}>;
    ListWebinarRegistrants: (webinarId: string, params?: ListRegistrantsParams) => Promise<ListRegistrantsResponse>;
    AddWebinarRegistrant: (webinarId: string, registrant: Registrant, params?: AddRegistrantParams) => Promise<AddRegistrantResponse>;
    UpdateWebinarRegistrantStatus: (webinarId: string, body: UpdateRegistrantStatusBody, params?: UpdateRegistrantStatusParams) => Promise<{}>;
    ListPastWebinarQA: (webinarId: string) => Promise<WebinarQAResponse>;
};
