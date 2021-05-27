# API Router

This is a repository for the API Router project for the NEAR Certified Developer Program.

The idea is to create a router for API call requests to, as a first step, organize the requests until they reach a critial mass. This first step involves the following steps:

1.  Stub contract created (could be email, text, ML tasks, etc.)
2.  Router contract created, with input as stub contract type, number of units.
    1.  If Router has enough contracts, will execute.
    2.  Otherwise, will wait.

This takes advantage of the tiering model for example, of APIs such as Google Maps or Twilio. There seems to be some work done on
APIs being natively available on the blockchain (e.g. [Airnode](https://medium.com/api3/airnode-the-api-gateway-for-blockchains-8b07ff136840)),
but not much on API gateways or routers.

# Motivation

The current ways to batch calls, etc. involve creating your own gateway aggregation pattern, or own lambda calls. Other than scheduling, there's
no way to value API calls by time, volume, $, etc. Introducing NEAR adds an economic component to the API call so we can sanely bundle calls.

# api-router Smart Contract

A [smart contract] written in [AssemblyScript] for an app initialized with [create-near-app], however modified so that:

- Only assembly directory remains (as no web front-end)

# Quick Start

Before you compile this code, you will need to install [Node.js] ≥ 12, then:

1. `yarn install`
2. `yarn build`
3. `yarn test`

# Exploring The Code

1. The main smart contract code lives in `index.ts`. You can compile
   it with the `./compile` script or `yard build`.
2. Tests: You can run smart contract tests with the `./test` script or `yarn test`. This runs
   standard AssemblyScript tests using [as-pect].

[smart contract]: https://docs.near.org/docs/develop/contracts/overview
[assemblyscript]: https://www.assemblyscript.org/
[create-near-app]: https://github.com/near/create-near-app
[node.js]: https://nodejs.org/en/download/package-manager/
[as-pect]: https://www.npmjs.com/package/@as-pect/cli

# Questions

1. In terms of creating sub-accounts, why can't wombat.testnet create domains 1 level remoted to it? For example, wombat.testnet can't create email.apirouter.wombat.testnet? Does it cost
2. Why am i returning Void for the promise?
