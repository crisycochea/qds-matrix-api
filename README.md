# QDS Matrix Api

## Table of Contents

- [QDS Matrix Api](#qds-matrix-api)
  - [Table of Contents](#table-of-contents)
  - [Examples](#examples)
  - [Considerations:](#considerations)
  - [How to...](#how-to)
    - [Installing](#installing)
    - [Debugging](#debugging)
    - [Test](#test)
    - [Linting](#linting)
    - [Build for production](#build-for-production)
    - [Run production build](#run-production-build)
    - [Test the endpoint](#test-the-endpoint)


## Examples

- Rotate [[1, 2], [3, 4]]
![Rotate even matrix](https://firebasestorage.googleapis.com/v0/b/cristianycochea.appspot.com/o/assets%2Frotate-even-matrix.png.png?alt=media )

- Rotate [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
![Rotate odd matrix](https://firebasestorage.googleapis.com/v0/b/cristianycochea.appspot.com/o/assets%2Frotate-odd-matrix.png?alt=media)

## Considerations:
- **Algorithm**: I use the 2 steps(transpose and vertical) algorithm because it's more readable and intuitive and it shares the same big O complexity which is O(n^n) with other algorithms(e.g. nested loop options).
- **Architecture**: Even though there's only an endpoint. The requirement said that it should be scalable. So, we use the onion architecture to separate the business logic and domain from external elements such as express. Also, that is the reason why I create decorators and errorHandler.
- **Docker compose**: There's no reverse proxy such as Nginx or Traefik in the compose file to keep the deploy flexibility.

## How to...
### Installing

```bash
npm install
npm run start:dev
```

### Debugging
You  configure your editor to run or attach a debugger after run:
```bash
npm run debug
```


### Test

``` bash
npm run test
```


### Linting

Run the linter

```bash
npm run lint
```

Fix lint issues automatically

```bash
npm run lint:fix
```

### Build for production
```bash
docker compose build
```

### Run production build
```bash
docker compose up
```

### Test the endpoint
```bash
curl -X POST \
  'http://localhost:3000/square-matrices/rotate-counter-clock-wise' \
  --header 'Content-Type: application/json' \
  --data-raw '{"matrix": [ [1,2], [3,4]]}'
```
