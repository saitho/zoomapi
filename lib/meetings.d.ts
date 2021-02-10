import { ZoomOptions, PaginatedResponse, TrackingField, Occurrence, ApprovalType, RegistrationType, Audio, AudioRecording, Recurrence, ListRegistrantsParams, Registrant, ListRegistrantsResponse, AddRegistrantParams, AddRegistrantResponse, UpdateRegistrantStatusBody, UpdateRegistrantStatusParams } from './common';
/**
 * 1 - Instant meeting.
 * 2 - Scheduled meeting.
 * 3 - Recurring meeting with no fixed time.
 * 8 - Recurring meeting with fixed time.
 */
export declare type MeetingType = 1 | 2 | 3 | 8;
export declare type MeetingSettings = {
    host_video?: boolean;
    participant_video?: boolean;
    cn_meeting?: boolean;
    in_meeting?: boolean;
    join_before_host?: boolean;
    mute_upon_entry?: boolean;
    watermark?: boolean;
    use_pmi?: boolean;
    approval_type?: ApprovalType;
    registration_type?: RegistrationType;
    audio?: Audio;
    auto_recording?: AudioRecording;
    alternative_hosts?: string;
    close_registration?: boolean;
    waiting_room?: boolean;
    global_dial_in_countries?: string[];
    global_dial_in_numbers?: {
        country: string;
        country_name: string;
        city: string;
        number: string;
        type: string;
    }[];
    contact_name?: string;
    contact_email?: string;
    registrants_confirmation_email?: boolean;
    registrants_email_notification?: boolean;
    meeting_authentication?: boolean;
    authentication_option?: string;
    authentication_domains?: string;
    authentication_name?: string;
    additional_data_center_regions?: string[];
};
export declare type Meeting = {
    uuid?: string;
    id?: string;
    host_id?: string;
    topic?: string;
    type?: MeetingType;
    start_time?: string;
    duration?: number;
    schedule_for?: string;
    timezone?: string;
    created_at?: string;
    join_url?: string;
    agenda?: string;
    start_url?: string;
    password?: string;
    h323_password?: string;
    encrypted_password?: string;
    pmi?: number;
    tracking_fields?: TrackingField[];
    occurrences?: Occurrence[];
    settings?: MeetingSettings;
    recurrence?: Recurrence;
};
export declare type ListMeetingsParams = {
    type?: 'scheduled' | 'live' | 'upcoming';
    page_size?: number;
    page_number?: number;
};
export declare type ListMeetingsResponse = PaginatedResponse & {
    meetings: Meeting[];
};
export declare type GetMeetingParams = {
    occurrence_id?: string;
};
export declare type DeleteMeetingParams = {
    occurrence_id?: string;
    schedule_for_reminder?: boolean;
};
export declare type UpdateMeetingStatusParams = {
    action: 'end';
};
export declare type GetMeetingInvitationResponse = {
    invitation: string;
};
export declare type GetMeetingRecordingsResponse = {
    uuid: string;
    id: string;
    account_id: string;
    host_id: string;
    topic: string;
    start_time: string;
    duration: number;
    total_size: string;
    recording_count: string;
    recording_files: {
        id: string;
        meeting_id: string;
        recording_start: string;
        recording_end: string;
        file_type: 'MP4' | 'M4A' | 'TIMELINE' | 'TRANSCRIPT' | 'CHAT' | 'CC';
        file_size: number;
        play_url: string;
        download_url: string;
        status: string;
        deleted_time: string;
        recording_type: 'shared_screen_with_speaker_view(CC)' | 'shared_screen_with_speaker_view' | 'shared_screen_with_gallery_view' | 'speaker_view' | 'gallery_view' | 'shared_screen' | 'audio_only' | 'audio_transcript' | 'chat_file' | 'TIMELINE' | 'active_speaker';
    }[];
};
export default function (zoomApiOpts: ZoomOptions): {
    ListMeetings: (userId: string, params?: ListMeetingsParams) => Promise<ListMeetingsResponse>;
    CreateMeeting: (userId: string, meeting: Meeting) => Promise<Meeting>;
    GetMeeting: (meetingId: string, params?: GetMeetingParams) => Promise<Meeting>;
    UpdateMeeting: (meetingId: string, meeting: Meeting, params?: GetMeetingParams) => Promise<{}>;
    UpdateMeetingStatus: (meetingId: string, body: UpdateMeetingStatusParams) => Promise<{}>;
    DeleteMeeting: (meetingId: string, params?: DeleteMeetingParams) => Promise<{}>;
    ListRegistrants: (meetingId: string, params?: ListRegistrantsParams) => Promise<ListRegistrantsResponse>;
    AddRegistrant: (meetingId: string, registrant: Registrant, params?: AddRegistrantParams) => Promise<AddRegistrantResponse>;
    UpdateRegistrantStatus: (meetingId: string, body: UpdateRegistrantStatusBody, params?: UpdateRegistrantStatusParams) => Promise<{}>;
    GetMeetingInvitation: (meetingId: string) => Promise<GetMeetingInvitationResponse>;
    GetMeetingRecordings: (meetingId: string) => Promise<GetMeetingRecordingsResponse>;
};
