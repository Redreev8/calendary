import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import app from './db/app';

@Module({
    imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [app]
		})
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
