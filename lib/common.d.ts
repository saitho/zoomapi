export declare type ZoomOptions = {
    apiKey: string;
    apiSecret: string;
    tokenExpiresIn?: string | number;
};
export declare type ListResponse = {
    total_records: number;
};
export declare type PaginatedResponse = ListResponse & {
    page_count: number;
    page_number: number;
    page_size: number;
};
export declare type TrackingField = {
    field: string;
    value: string;
};
export declare type Occurrence = {
    occurrence_id: string;
    start_time: string;
    duration: number;
    status: string;
};
/**
 * 0 - Automatically approve.
 * 1 - Manually approve.
 * 2 - No registration required.
 */
export declare type ApprovalType = 0 | 1 | 2;
/**
 * 1 - Attendees register once and can attend any of the occurrences.
 * 2 - Attendees need to register for each occurrence to attend.
 * 3 - Attendees register once and can choose one or more occurrences to attend.
 */
export declare type RegistrationType = 1 | 2 | 3;
export declare type Audio = 'both' | 'telephony' | 'voip';
export declare type AudioRecording = 'local' | 'cloud' | 'none';
export declare type Recurrence = {
    /**
     * 1 - Daily.
     * 2 - Weekly.
     * 3 - Monthly.
     */
    type: 1 | 2 | 3;
    repeat_interval: number;
    weekly_days: string;
    monthly_day: number;
    monthly_week: number;
    monthly_week_day: number;
    end_times: number;
    end_date_time: string;
};
export declare type RegistrantStatus = 'approved' | 'pending' | 'denied';
export declare type ListRegistrantsParams = {
    occurrence_id?: string;
    status?: RegistrantStatus;
    page_size?: number;
    page_number?: number;
};
export declare type Question = {
    title: string;
    value?: string;
};
export declare type Registrant = {
    id?: string;
    email: string;
    first_name: string;
    last_name?: string;
    address?: string;
    city?: string;
    country?: string;
    zip?: string;
    state?: string;
    phone?: string;
    industry?: string;
    org?: string;
    job_title?: string;
    purchasing_time_frame?: string;
    role_in_purchase_process?: string;
    no_of_employees?: string;
    comments?: string;
    custom_questions?: Question[];
    status?: RegistrantStatus;
    create_time?: string;
    join_url?: string;
};
export declare type ListRegistrantsResponse = PaginatedResponse & {
    registrants: Registrant[];
};
export declare type AddRegistrantParams = {
    occurrence_ids?: string;
};
export declare type AddRegistrantResponse = {
    id: number;
    join_url: string;
    registrant_id: string;
    start_time: string;
    topic: string;
};
export declare type UpdateRegistrantStatusBody = {
    action: 'approve' | 'cancel' | 'deny';
    registrants: Partial<Pick<Registrant, 'id' | 'email'>>[];
};
export declare type UpdateRegistrantStatusParams = {
    occurrence_id?: string;
};
