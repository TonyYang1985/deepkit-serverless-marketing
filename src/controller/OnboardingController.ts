
import { HttpBody, http} from '@deepkit/http';

import { OnboardingService } from '../services';
import { SignInWithPassword } from '../vo';

@http.controller()
export class OnboardingController{

    constructor(protected service:OnboardingService) {}
    
    @http.POST('/signIn/pwd')
    async signInByPassword(signIn: HttpBody<SignInWithPassword>) {
        return await this.service.signInWithPassword(signIn);
    }


}