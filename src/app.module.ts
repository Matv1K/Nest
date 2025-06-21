import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NorsemenController } from './norsemen/norsemen.controller';
import { AppService } from './app.service';
import { NorsemenService } from './norsemen/norsemen.service';


@Module({
  imports: [],
  controllers: [AppController, NorsemenController],
  providers: [AppService, NorsemenService],
})

export class AppModule {}
