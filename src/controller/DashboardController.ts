
import { HttpBody, http} from '@deepkit/http';

import { OnboardingService } from '../services';
import { SignInWithPassword } from '../vo';

@http.controller()
export class DashboardController{

    constructor(protected service:OnboardingService) {}
    
    @http.GET('/dashboard')
    async getChannels() {
        return [
            {
              category: 'Website',
              stat: '10,234',
              data: [
                { name: '/home', value: 1230 },
                { name: '/contact', value: 751 },
                { name: '/gallery', value: 471 },
                { name: '/august-discount-offer', value: 280 },
                { name: '/case-studies', value: 78 }
              ]
            },
            {
              category: 'Online Shop',
              stat: '12,543',
              data: [
                { name: '/home', value: 453 },
                { name: '/imprint', value: 351 },
                { name: '/shop', value: 271 },
                { name: '/pricing', value: 191 }
              ]
            },
            {
              category: 'Mobile App',
              stat: '2,543',
              data: [
                { name: '/shop', value: 789 },
                { name: '/product-features', value: 676 },
                { name: '/about', value: 564 },
                { name: '/login', value: 234 },
                { name: '/downloads', value: 191 }
              ]
            }
          ];
    }


}