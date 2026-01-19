import { App } from '@/app'; 
import { ValidateEnv } from '@/common/utils/validateEnv';  
import { UserRoute } from './user/user.route';
import { AuthRoute } from './auth/auth.route';


ValidateEnv();

const routes = [
    new UserRoute(),
    new AuthRoute(),

]

const app = new App(routes);

app.listen();
