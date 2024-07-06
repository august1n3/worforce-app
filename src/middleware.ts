import { NextResponse, type NextRequest } from 'next/server'
import {checkAuthentication} from '@/services/Authentication/fireAuth'

export function middleware(request: NextRequest) {
      var isUserSigned = checkAuthentication();

      if(isUserSigned){
        return NextResponse.rewrite(new URL('https://google.com', request.url));
      }

      

}