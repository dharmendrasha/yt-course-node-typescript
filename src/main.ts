import { connect } from 'mongoose';
import { MONGO_DB_CONN_STRING, PORT } from './conf';
import { app } from './app'
import { logger } from './util/logger';


async function main(){
    if(!MONGO_DB_CONN_STRING){
        throw new Error(`env MONGO_DB_CONN_STRING not found`)
    }

    await connect(MONGO_DB_CONN_STRING)

    logger.log(`database connected`)

    app.listen(PORT, () => {
        logger.log(`server is running on PORT=${PORT} visit http://0.0.0.0:${PORT}`)
    });
}

main()

