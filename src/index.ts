import { ApolloServer, } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";
import path from "path";
import productResolver from "./product/resolver";


const typeDefPath = path.join(__dirname, "**/*.graphql")
const typeDefs = loadFilesSync(typeDefPath);

const resolvers = mergeResolvers([productResolver])


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new ApolloServer({ schema })

server.listen().then(({ url }) => {
    console.log("Server is listening on port ", url)
})