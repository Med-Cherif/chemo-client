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