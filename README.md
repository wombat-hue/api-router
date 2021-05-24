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
