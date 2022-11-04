import { gql } from "graphql-request"

export const GET_BOOKS = gql`
    query {
        books {
            title
            author
        }
    }
`

export const ADD_BOOK = gql`
    mutation($title: String, $author: String) {
        addBook(title: $title, author: $author) {
            title
            author
        }
    }
`

export const GET_AUTHOR_OR_BOOK = gql`
    query($resultValue2: String!) {
        result(value: $resultValue2) {
            __typename
            ... on Book {
            title
            }
            ... on Author {
            name
            }
        }
    }
`