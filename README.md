
## Description

This is the simple currency to currency conversion api built on top of `Nest Js, TypeScript and Mongo DB`

## Installation

```bash
$ npm install
```

## Database

- Create `cp .env.example .env`
- Update `.env` with your `MongoDB` variables


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## API Documentation

On your browser open `localhost:YourPort/docs`

## Quick Usage

- To add `exchange rates` between two currencies

End Point
`localhost:3000/api/exchange-rates`

Payload
```
{
    "currency1":"TZS",
    "currency2":"USD",
    "rate": "0.00043",
    "date": "2022-08-22"
}
```

- To request `exchange rates` between two currencies at any moment in time


End Point

`localhost:3000/api/exchange-rates/rate`

Payload
```
{
    "from": "TZS",
    "to": "USD",
    "date": "yyyy-mm-dd" (Optional) If This is empty today's date will be default
}
```

- To get Convert  value from one currency to another at any time

End Point

`localhost:3000/api/exchange-rates/rate`

Payload
```
{
    "from": "TZS",
    "to": "USD",
    "amount": "100000"
    "date": "yyyy-mm-dd" (Optional) If This is empty today's date will be default
}
```

Cheers!!!
