import { App } from '@/app'; 
import { ValidateEnv } from '@/common/utils/validateEnv';  
import { HelloWorldRoute } from './hello_world/hello_world.route';

ValidateEnv();

const routes = [
    new HelloWorldRoute(),

]

const app = new App(routes);

app.listen();
