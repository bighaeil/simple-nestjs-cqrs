## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Documentation

### 유저 생성 요청

```shell
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{
"id": "1",
"name": "Alice",
"email": "alice@example.com"
}'
```

### 유저 조회

```shell
curl -X GET http://localhost:3000/users
````

### 게시글 생성 요청

```shell
curl -X POST http://localhost:3000/posts -H "Content-Type: application/json" -d '{
"id": "101",
"userId": "1",
"title": "NestJS CQRS 패턴",
"content": "NestJS에서 CQRS 패턴을 적용하는 방법에 대해 설명합니다."
}'
```

### 유저의 게시글 조회

```shell
curl -X GET http://localhost:3000/posts/1
```

### 게시글 수정 요청

```shell
curl -X PUT http://localhost:3000/users -H "Content-Type: application/json" -d '{"id":"1", "newName":"Bob"}'
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
