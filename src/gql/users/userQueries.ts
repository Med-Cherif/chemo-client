import { gql } from "graphql-request";

export const REGISTER = gql`
    mutation Register($request: SignupData) {
        signup(request: $request) {
            accessToken
            refreshToken
            user {
                email
                name
                isVerified
                role
            }
        }
    }
`

export const LOGIN = gql`
    mutation($data: SigninData) {
        signin(data: $data) {
            accessToken
            refreshToken
            user {
                email
                name
                isVerified
                role
            }
        }
    }
`