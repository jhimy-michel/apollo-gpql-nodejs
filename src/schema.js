
const {gql}  = require('apollo-server');

const typeDefs = gql`

type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments: [Comment!]!
    me: User!
    post: Post!
}


type Mutation {
    createUser(data: CreateUserInput!): User!
    updateUser(id:ID!,data:iUpdateUser!):User!
    deleteUser(id: ID!): User!
    createPost(data: CreatePostInput!): Post!
    updatePost(id:ID!,data:iUpdatePost):Post!
    deletePost(id: ID!): Post!
    createComment(data: CreateCommentInput!): Comment!
    deleteComment(id: ID!): Comment!
    updateComment(id:ID!,data:iUpdateComment):Comment!
}

type Subscription{
    count: Int!
    comment(postId:ID!): Comment!
    post:Post!
}

input iUpdateUser{
    name:String
    email:String
    age:String
}
input iUpdatePost{
    title: String
    body: String
    published: Boolean
}
input iUpdateComment{
    text: String
}

input CreateUserInput {
    name: String!
    email: String!
    age: Int
}

input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    author: ID!
}

input CreateCommentInput {
    text: String!
    author: ID!
    post: ID!
}

type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
}

type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
}

type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
}`

export { typeDefs as default }