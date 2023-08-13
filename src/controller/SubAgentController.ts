
import { HttpBody, http} from '@deepkit/http';

import { OnboardingService } from '../services';

@http.controller()
export class SubAgentController{
    constructor(protected service:OnboardingService) {}


}