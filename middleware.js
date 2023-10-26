require('dotenv');
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
 
export async function middleware(request) {
    const tokenObj = request.cookies.get('myToken');

    // console.log(request.nextUrl.pathname);
    console.log(tokenObj);

    if(request.nextUrl.pathname.includes('/jobs')){
        if(tokenObj === undefined){
            return NextResponse.redirect(new URL('/', request.url));
        }

        console.log(process.env.JWT_SECRET);

        try{
            const { payload } = await jwtVerify(tokenObj.value, new TextEncoder().encode(process.env.JWT_SECRET));
            console.log(payload);
            return NextResponse.next();
        }catch(error){
            return NextResponse.redirect(new URL('/', request.url));
            console.log(error);
        }
    }
}