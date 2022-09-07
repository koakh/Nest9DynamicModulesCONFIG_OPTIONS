import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [ConfigModule],
  controllers: [TestController],
  providers: [TestService, ConfigService]
})
export class TestModule {  
}
