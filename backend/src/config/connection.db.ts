import { AppDataSource } from './typeorm.db';

export const setupDbConnection = async () => {
    try {
        console.info('Connecting to database...');
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
        }

        console.info('Database connected successfully');
    } catch (error) {
        console.error('Failed to connect database', error.message);
        throw error;
    }
};
