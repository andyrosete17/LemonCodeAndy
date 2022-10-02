graph ql 
playground de github

query Test{
  viewer {
    login
    avatarUrl
    company
    bio
    anyPinnableItems
  }
}

query Repo($repositoryName:String!, $repositoryOwner:String!) {
   repository(name: $repositoryName, owner:  $repositoryOwner) {
    name
    description
  }
}

query Organization {
  organization(login: "lemoncode") {
    name
    description
    membersWithRole(first: 15) {
      edges {
        node {
          login
        }
      }
    }
  }
}


// Variables

{
  "repositoryName": "react",
  "repositoryOwner": "facebook"
}


// Para enviar datos al servidor para hacer actualizaciones (post, patch, puth) se usa las mutations
mutation MutationA($repositoryInput: UpdateRepositoryInput) {
  updateRepository(input:{$repositoryInput }){
    repository {
      name
      description
    }
  }
}

// Variables

{
	"repositoryInput": {
	"repositoryId": "tstse",
	"description":"descriptionasa sdfasdf"
	}
}


Para instalar apollo para express
npm install apollo-server-express graphql --save


para trabajar con el cliente 
npm install graphql-request graphql --save

Para configurar el servidor 
En el index se debe importar
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';


y luego llamar a ese ApolloServer, con esto lo que hacemos es indicar que usaremos un typeDefs y un resolver para que use graphql
lo del nodeEnv es para que los emuladores de graphql que levante sean en local y no en el servidor original
  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      process.env.Node_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled
        : ApolloServerPluginLandingPageGraphQLPlayground,
    ],
  });

 await graphqlServer.start();  // se ejecuta el graphqlServer
graphqlServer.applyMiddleware({ app });  //  se pone un wrapper de app para que las llamadas a la app usen graphql




añadimos carpeta graphql en el server con dos ficheros, el resolver.ts y el type-def.ts uno para las definiciones y otro para las implementaciones
ejemplo

import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Hotel {
    id: ID!
    type: String!
    name: String!
    address1: String!
    city: String!
    hotelRating: Float!
    shortDescription: String!
    thumbNailUrl: String!
    tripAdvisorRating: Float!
    tripAdvisorRatingUrl: String!
  }

  type Query {
    hotels: [Hotel!]!
    hotel(id: ID!): Hotel!
  }

  input HotelInput {
    id: ID!
    name: String!
    address1: String!
    city: String!
    hotelRating: Float!
    shortDescription: String!
  }

  type Mutation {
    saveHotel(hotel: HotelInput): Boolean
  }
`;


Importante que el Query es para los gets, y las mutation para los updates/remove 

en el caso del resolver lleva la implementacion del backend, en este caso se hace lo que haría la api, para devolver todos los datos posibles
import {
  getHotelList,
  getHotel,
  updateHotel,
  insertHotel,
  HotelEdit,
} from '../db';

interface SaveHotelArgs {
  hotel: HotelEdit;
}

export const resolvers = {
  Query: {
    hotels: async () => {
      const hotels = await getHotelList();
      return hotels;
    },
    hotel: async (_parent, args) => {
      const hotel = await getHotel(args.id);
      return hotel;
    },
  },
  Mutation: {
    saveHotel: async (_parent, args: SaveHotelArgs) => {
      if (args.hotel.id) {
        await updateHotel(args.hotel);
      } else {
        await insertHotel(args.hotel);
      }
      return true;
    },
  },
};


En el front
creamos una carpeta de api y añadimos el graphql.client

import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient('/graphql');

para ejecutar el cliente en este caso


luego para utilizarlo en el caso del get 

interface GetHotelCollectionResponse {
  hotels: HotelEntityApi[];
}
export const getHotelCollection = async (): Promise<HotelEntityApi[]> => {
  const query = gql`
    query {
      hotels {
        id
        name
        shortDescription
        hotelRating
        address1
        thumbNailUrl
      }
    }
  `;

  const { hotels } = await graphQLClient.request<GetHotelCollectionResponse>(
    query
  );

  return hotels;
};


si se quiere hacer una mutacion

interface GetHotelResponse {
  hotel: Hotel;
}


export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
  const query = gql`
    mutation ($hotel: HotelInput) {
      saveHotel(hotel: $hotel)
    }
  `;

  const { saveHotel } = await graphQLClient.request<{ saveHotel: boolean }>(
    query,
    { hotel }
  );

  return saveHotel;
};

