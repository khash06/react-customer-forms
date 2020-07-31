const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`;

const resolvers = {
    Query: {
        books: () => books,
    },
};

const books = [
    {
        title: 'Harry Potter', 
        author: 'J.K Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crighton',
    },
];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`server ready at ${url}`);
})