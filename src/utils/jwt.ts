import jwt from 'jsonwebtoken';

export const createToken = async (user:any)=>{
  const token =  jwt.sign({id:user?.id},process.env.JWT_SECRET!,{expiresIn:'1h'});
  return token;
}
export const verify = (token:any)=>{
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET!);
      return decoded
  } catch (error) {
    return null
 }

}
