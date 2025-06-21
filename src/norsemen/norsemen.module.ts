import { Module } from "@nestjs/common";
import { NorsemenController } from "./norsemen.controller";
import { NorsemenService } from "./norsemen.service";

@Module({
    controllers: [NorsemenController],
    providers: [NorsemenService],
})

export class NorsemenModule {}
