import { App } from '@/app'; 
import { ValidateEnv } from '@/common/utils/validateEnv';  
import { UserRoute } from './user/user.route';

ValidateEnv();

const routes = [
    new UserRoute()

]

const app = new App(routes);

app.listen();
