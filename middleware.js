require('dotenv');
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
 
export async function middleware(request) {
    const tokenObj = request.cookies.get('myToken');

    if(request.nextUrl.pathname.includes('/jobs')){
        if(tokenObj === undefined){
            return NextResponse.redirect(new URL('/', request.url));
        }


        try{
            const { payload } = await jwtVerify(tokenObj.value, new TextEncoder().encode(process.env.JWT_SECRET));
            console.log(payload);
            return NextResponse.next();
        }catch(error){
            console.log(error);
            return NextResponse.redirect(new URL('/', request.url));
        }
    }
}