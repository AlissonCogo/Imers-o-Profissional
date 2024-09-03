import 'reflect-metadata'
import { DataSource, DataSource } from 'typeorm'


const DataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234567",
    database: "database-Unieventos",
    synchronize: true,
    logging: false,
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))