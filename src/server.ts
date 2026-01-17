import { App } from '@/app'; 
import { ValidateEnv } from '@/common/utils/validateEnv';  

ValidateEnv();

const routes = []

const app = new App(routes);

app.listen();
