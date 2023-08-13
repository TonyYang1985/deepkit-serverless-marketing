import { App } from '@deepkit/app';
import { FrameworkModule } from '@deepkit/framework';
import { HttpModule} from '@deepkit/http';
import { OnboardingController,AgentController,DashboardController } from './controller';
import { MySQLDatabase } from './database';
import { OnboardingService , MqttService} from './services';


export function createApp() {
  const app = new App({
    controllers: [OnboardingController,AgentController,DashboardController],
    providers: [MqttService,MySQLDatabase,OnboardingService,],
    exports: [MqttService,MySQLDatabase,OnboardingService],
    imports: [
      new HttpModule(),
      new FrameworkModule({
        migrateOnStartup: true,
        debug: true,
      }),
    ],
  });
  return app;
}
