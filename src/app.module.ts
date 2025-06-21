import { Module } from '@nestjs/common';
import { NorsemenModule } from './norsemen/norsemen.module';
@Module({
  imports: [NorsemenModule],
})

export class AppModule {}
