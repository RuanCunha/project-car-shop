import App from './app';
import errorMiddleware from './middlewares/errorMiddleware';
import CarRouter from './routes/CarRouter';

// import exampleController from './controllers/controller-example';

// import { example } from './interfaces/ExampleInterface';

const server = new App();

server.addMiddleware(CarRouter);
server.addMiddleware(errorMiddleware);
// const exampleController = new exampleController();

// const exampleRouter = new CustomRouter<Car>();
// exampleRouter.addRoute(exampleController);

// server.addRouter(exampleRouter.router);

export default server;
