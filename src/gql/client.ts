import { GraphQLClient } from "graphql-request";

const API_URL = "http://localhost:4000/graphql"

const userClient = new GraphQLClient(API_URL)

export default userClient;