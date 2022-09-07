import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    ConfigModule.register({ folder: './config' }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [ConfigModule]
})
export class AppModule { }
