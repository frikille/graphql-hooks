import React from 'react'
import ReactDOM from 'react-dom'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'
import SubscriptionClient from 'graphql-hooks-subscription-client'

import App from './App'

const host = window.location.host

const client = new GraphQLClient({
  url: `http://${host}/graphql`,
  cache: memCache(),
  subscriptionClient: new SubscriptionClient(`ws://${host}/graphql`, {
    reconnect: true
  })
})

ReactDOM.render(
  <ClientContext.Provider value={client}>
    <App />
  </ClientContext.Provider>,
  document.getElementById('root')
)
