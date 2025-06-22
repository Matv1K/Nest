import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { NorsemenController } from "./norsemen.controller";
import { NorsemenService } from "./norsemen.service";

import { Norseman } from "./norseman.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Norseman])],
    controllers: [NorsemenController],
    providers: [NorsemenService],
})

export class NorsemenModule {}
