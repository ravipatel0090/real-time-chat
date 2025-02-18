import {server} from './app';
import sequelize from './config/db';

const PORT  = process.env.PORT || 5000;

(async ()=>{
    try {
        await sequelize.sync({alter:true})
        console.log("DB Connected");
        server.listen(PORT,()=>console.log("Server Running"))
    } catch (error) {
        console.log(`Error in db`,error)
    }
})()
