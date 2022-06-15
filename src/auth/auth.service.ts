import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    public authToken(headers: {[key: string]: any}): boolean{
        // check if header carry authorization token
        if (headers.hasOwnProperty('authorization')){
            // extract the Bearer token from header 
            const BearerToken = headers.authorization.split(' ');
            // verify the Bearer token 
            if (BearerToken[0] === 'Bearer' && BearerToken[1] === 'cool')
                return true
            else 
                return false 
        }
        else    
            return false;
    }
}
