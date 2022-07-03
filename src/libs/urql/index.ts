import { devtoolsExchange } from '@urql/devtools';
import { authExchange } from '@urql/exchange-auth';
import { createClient, ClientOptions, cacheExchange, dedupExchange, fetchExchange } from 'urql';
import authConfig from './authConfig';

const url = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_DEVELOP || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
if (!url) {
  throw new Error('"NEXT_PUBLIC_GRAPHQL_ENDPOINT"または"NEXT_PUBLIC_GRAPHQL_ENDPOINT_DEVELOP"は必須の環境変数です.');
}

const clientOptions: ClientOptions = {
  url,
  exchanges: [devtoolsExchange, dedupExchange, cacheExchange, authExchange(authConfig), fetchExchange],
};

const urqlClient = createClient(clientOptions);

export default urqlClient;
