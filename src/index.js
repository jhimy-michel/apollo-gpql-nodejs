const { ApolloServer, PubSub } = require('apollo-server');
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import typeDefs  from './schema';
import Subscription from './resolvers/Subscription'


const pubsub = new PubSub()

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: {
        Query,
        Mutation,
        Subscription,
        User,
        Post,
        Comment
    },
    context: {
        db,
        pubsub
    }
})

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
    console.log(
      `Try your health check at: ${url}.well-known/apollo/server-health`,
    );
  });