import jwt from 'jsonwebtoken';

export const generateToken= (userId, res)=>{
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not configured');
    }
    
    const token = jwt.sign({  userId }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    res.cookie('jwt',token,{
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
    })

    return token;
}