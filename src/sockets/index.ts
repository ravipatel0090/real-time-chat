import { Server } from "socket.io"


export const initializeSocket = (server:any) =>{
    const io= new Server(server,{cors:{origin:'*'}});

    io.on('connection',(socket) =>{

        console.log('User connected:',socket?.id);
        
        socket.on('joinRoom',(room)=>{
            socket.join(room);

            console.log(`User joined room: ${room}`);
        })

        socket.on('message',({room,message})=>{
           io.to(room).emit('message',message);
        });

        socket.on('disconnect',()=>{
            console.log(`User disconcetd`)
         })
        
    });
    return io;
}
