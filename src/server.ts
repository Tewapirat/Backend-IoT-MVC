import { App } from '@/app'; 
import { ValidateEnv } from '@/common/utils/validateEnv';  
import { UserRoute } from './user/user.route';
import { AuthRoute } from './auth/auth.route';
import { DeviceRoute } from './device/device.route';
import { DeviceLogRoute } from './device-log/device-log.route';


ValidateEnv();

const routes = [
    new UserRoute(),
    new AuthRoute(),
    new DeviceRoute(),
    new DeviceLogRoute(),

]

const app = new App(routes);

app.listen();
