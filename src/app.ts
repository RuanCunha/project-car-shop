import express, { Router, ErrorRequestHandler, NextFunction } from 'express';
import connectToDatabase from './connection';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(PORT: string | number = 3003): void {
    connectToDatabase();
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public addMiddleware(
    middleware: Router | ErrorRequestHandler | NextFunction,
  ) {
    this.app.use(middleware);
  }

  public getApp() {
    return this.app;
  }
}

export default App;
