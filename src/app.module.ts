import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TestController } from './test/test.controller';
import { AppService } from './app.service';
import { TestService } from './test/test.service';


@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, TestService],
})
export class AppModule {}
