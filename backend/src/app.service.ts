import { Injectable } from '@nestjs/common';
import { ENVCONFIG } from './config/env.config';

@Injectable()
export class AppService {
    getAppStatus(): string {
        return `Server is running! 🚀\n Please check <a href="http://localhost:${ENVCONFIG.PORT}/docs">http://localhost:${ENVCONFIG.PORT}/docs</a> for Swagger docs...`;
    }
}
