# Kata

## Prerequisite

- node
- yarn

## Setup

```
mkdir src/
mkdir test/
yarn init
yarn add -D typescript jest ts-jest @types/jest
# yarn global add jest-cli
```

Edit __package.json__

```json
"scripts": {
    "test": "jest --detectOpenHandles --colors --passWithNoTests"
}
```

Create __jest.config.js__

```
yarn ts-jest config:init
```

## Test

```
yarn test
```

or

```
yarn test test/main.spec.ts
```

## References

- [Debugging with TypeScript, Jest, ts-jest and Visual Studio Code](https://link.medium.com/HTloRTlqQ6)
