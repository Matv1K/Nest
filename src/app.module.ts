import { Module } from '@nestjs/common';
import { NorsemenController } from './norsemen/norsemen.controller';
import { NorsemenService } from './norsemen/norsemen.service';


@Module({
  imports: [],
  controllers: [NorsemenController],
  providers: [NorsemenService],
})

export class AppModule {}
