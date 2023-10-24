export interface LoginRegisterRequest extends IRequest
{
    email :string
    password : string
}

export interface SaveGoogleKeyRequest extends IRequest{
    ApiKey : string
}
export interface IRequest{}