import { Module } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [ConfigModule],
  controllers: [TestController],
  providers: [TestService, ConfigService],
})
export class TestModule {
}
