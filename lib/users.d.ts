import { ZoomOptions, PaginatedResponse } from './common';
/**
 * 1 - Basic.
 * 2 - Licensed.
 * 3 - On-prem.
 */
export declare type UserAccountType = 1 | 2 | 3;
/**
 * 0 - Facebook.
 * 1 - Google.
 * 99 - API.
 * 100 - Zoom.
 * 101 - SSO.
 */
export declare type UserLoginType = '0' | '1' | '99' | '100' | '101';
export declare type User = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    type: UserAccountType;
    status: string;
    pmi: number;
    timezone: string;
    dept: string;
    created_at: string;
    last_login_time: string;
    last_client_version: string;
    group_ids: string[];
    im_group_ids: string[];
    verified: 0 | 1;
    role_name?: string;
    use_pmi?: boolean;
    language?: string;
    phone_country?: string;
    phone_number?: string;
    vanity_url?: string;
    personal_meeting_url?: string;
    pic_url?: string;
    cms_user_id?: string;
    account_id?: string;
    host_key?: string;
    jid?: string;
    job_title?: string;
    company?: string;
    location?: string;
};
export declare type ListUsersParams = {
    status?: 'active' | 'inactive' | 'pending';
    page_size?: number;
    page_number?: number;
    role_id?: string;
};
export declare type ListUserResponse = PaginatedResponse & {
    users: User[];
};
export declare type GetUserParams = {
    login_type?: UserLoginType;
};
export declare type GetUserTokenParams = {
    type?: 'token' | 'zak';
};
export declare type GetUserTokenResponse = {
    token: string;
};
export declare type CreateUserBody = {
    action: 'create' | 'autoCreate' | 'custCreate' | 'ssoCreate';
    user_info?: {
        email: string;
        type: UserAccountType;
        first_name?: string;
        last_name?: string;
        password?: string;
    };
};
export declare type CreateUserResponse = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    type: UserAccountType;
};
export declare type DeleteUserParams = {
    action?: 'disassociate' | 'delete';
    transfer_email?: string;
    transfer_meeting?: boolean;
    transfer_webinar?: boolean;
    transfer_recording?: boolean;
};
export declare type UpdatePresenceStatusBody = {
    status: 'Available' | 'Away' | 'Do_Not_Disturb';
    /**
     * If you’re updating the status to "Do_Not_Disturb", specify a duration in minutes for which the status should remain as "Do_Not_Disturb".
     * The default value is 20 minutes and the maximum allowed value is 1440 minutes.
     */
    duration?: number;
};
export default function (zoomApiOpts: ZoomOptions): {
    ListUsers: (params?: ListUsersParams) => Promise<ListUserResponse>;
    GetUser: (userId: string, params?: GetUserParams) => Promise<User>;
    GetUserToken: (userId: string, params?: GetUserTokenParams) => Promise<GetUserTokenResponse>;
    CreateUser: (body: CreateUserBody) => Promise<CreateUserResponse>;
    DeleteUser: (userId: string, params?: DeleteUserParams) => Promise<{}>;
    UpdatePresenceStatus: (userId: string, body?: UpdatePresenceStatusBody) => Promise<{}>;
};
