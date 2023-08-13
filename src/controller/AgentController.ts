
import { HttpBody, http} from '@deepkit/http';

import { OnboardingService } from '../services';
import { SignInWithPassword } from '../vo';

@http.controller()
export class AgentController{

    constructor(protected service:OnboardingService) {}
    
    @http.GET('/channels')
    async getChannels() {
        return {};
    }


}