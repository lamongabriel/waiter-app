# create a PORT .env
> example: PORT=3001

# create MONGO_DB_URL .env
> example: MONGO_DB_URL=mongodb://127.0.0.1:27017

# Seed your database with the default values
```
seed -u mongodb://127.0.0.1:27017/waiterapp --drop-database ./src/database/seeds/data
```

