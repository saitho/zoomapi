import { MeetingType } from './meetings';
export declare type WebhookResponse<E, T> = {
    event: E;
    payload: {
        account_id: string;
        object: T;
    };
};
export declare type WebhookParticipant = {
    user_name: string;
    user_id?: string;
    id?: string;
    join_time?: string;
};
export declare type WebhookMeeting = {
    duration: number;
    start_time: string;
    timezone: string;
    topic: string;
    id: number;
    type: MeetingType;
    uuid: string;
    host_id: string;
};
export declare type WebhookMeetingWithParticipant = WebhookMeeting & {
    participant: WebhookParticipant;
};
export declare type WebhookMeetingStarted = WebhookResponse<'meeting.started', WebhookMeeting>;
export declare type WebhookJoinBeforeHost = WebhookResponse<'meeting.participant_jbh_joined', WebhookMeetingWithParticipant>;
export declare type WebhookParticipantJoined = WebhookResponse<'meeting.participant_joined', WebhookMeetingWithParticipant>;
export declare type WebhookParticipantLeft = WebhookResponse<'meeting.participant_left', WebhookMeetingWithParticipant>;
export declare type WebhookMeetingEnded = WebhookResponse<'meeting.ended', WebhookMeeting>;
export declare type WebhookEvent = WebhookMeetingStarted | WebhookJoinBeforeHost | WebhookParticipantJoined | WebhookParticipantLeft | WebhookMeetingEnded;
