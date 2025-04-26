import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class TypeOrmSubscriber implements EntitySubscriberInterface<any> {
    private async transformAndValidateEntity(entity: any): Promise<any> {
        if (entity) {
            const transformedEntity = plainToInstance(
                entity.constructor,
                entity,
            );
            await validateOrReject(transformedEntity);
        }
    }

    async beforeInsert(event: any): Promise<void> {
        await this.transformAndValidateEntity(event.entity);
    }

    async beforeUpdate(event: any): Promise<void> {
        await this.transformAndValidateEntity(event.entity);
    }
}
