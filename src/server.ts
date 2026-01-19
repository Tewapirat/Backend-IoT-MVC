import { App } from '@/app'; 
import { ValidateEnv } from '@/common/utils/validateEnv';  
import { UserRoute } from './user/user.route';
import { AuthRoute } from './auth/auth.route';
import { DeviceRoute } from './device/device.route';


ValidateEnv();

const routes = [
    new UserRoute(),
    new AuthRoute(),
    new DeviceRoute(),

]

const app = new App(routes);

app.listen();
