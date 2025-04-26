import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { IncomingMessage, Server, ServerResponse } from 'http';

export const swaggerConfig = (
    app: NestExpressApplication<
        Server<typeof IncomingMessage, typeof ServerResponse>
    >,
) => {
    const docConfig = new DocumentBuilder()
        .setTitle('API Documentation Coder Lab Test')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, docConfig);
    SwaggerModule.setup('docs', app, document);
};
