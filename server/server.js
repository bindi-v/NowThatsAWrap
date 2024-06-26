const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
//const { typeDefs, resolvers } = require('./schemas');
//const { authMiddleware } = require('./utils/auth');


const PORT = process.env.PORT || 3001;
const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

//server.applyMiddleware({ app });
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
 });



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now API server running on ${PORT}`);
   // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
