import { Controller, Get, Post, Body, HttpCode, Param, Put, Delete } from "@nestjs/common";
import { NorsemenService } from "./norsemen.service";
import { INorseman } from "./interfaces/norsemen.interface";

@Controller("norsemen")
export class NorsemenController {
    constructor(private readonly norsemenService: NorsemenService) {}

    @Get()
    getAllNorsemen(): Promise<INorseman[]> {
        return this.norsemenService.getAllNorsemen()
    }

    @Get(':id')
    getOneNorsemen(@Param() { id }: { id: string }) {
        return this.norsemenService.getOneNorseman(id)
    }

    @Post()
    @HttpCode(201)
    addOneNorseman(@Body() data: { name: string, description: string }) {        
        return this.norsemenService.addOneNorseman(data);
    }

    @Put(':id')
    updateOneNorseman(@Param() { id }: { id: string } ,@Body() data: { name: string; description: string }) {
        return this.norsemenService.updateOneNorseman(id, data)
    }

    @Delete(':id')
    deleteOneNorseman(@Param() { id }: { id: string }) {
        return this.norsemenService.deleteOneNorseman(id)
    }
};