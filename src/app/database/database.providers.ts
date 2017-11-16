import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'password',
            database: 'postgres',
            synchronize: true,
            logging: false,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
        }),
    },
];