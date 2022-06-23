import { authExchange } from '@urql/exchange-auth';
import type { ClientOptions } from 'urql';
import { createClient, cacheExchange, dedupExchange, fetchExchange } from 'urql';
import authConfig from './authConfig';

const clientOptions: ClientOptions = {
  url: 'https://programmist-server.herokuapp.com/graphql',
  exchanges: [dedupExchange, cacheExchange, authExchange(authConfig), fetchExchange],
};

const urqlClient = createClient(clientOptions);

export default urqlClient;
