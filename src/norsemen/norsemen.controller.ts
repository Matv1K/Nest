import { Controller, Get, Post, Body, HttpCode, Param, Put, Delete } from "@nestjs/common";
import { NorsemenService } from "./norsemen.service";

import { CreateNorsemanDto } from "./dto/create-norseman-dto";
import { UpdateNorsemanDto } from "./dto/update-norseman-dto";

import { INorseman } from "./interfaces/norsemen.interface";


@Controller("norsemen")
export class NorsemenController {
    constructor(private readonly norsemenService: NorsemenService) {}

    @Get()
    getAllNorsemen(): INorseman[] {
        return this.norsemenService.getAllNorsemen()
    }

    @Get(':id')
    getOneNorsemen(@Param() { id }: { id: string }) {
        return this.norsemenService.getOneNorseman(id)
    }

    @Post()
    @HttpCode(201)
    addOneNorseman(@Body() createNorsemanDto: CreateNorsemanDto): INorseman {        
        return this.norsemenService.addOneNorseman(createNorsemanDto);
    }

    @Put(':id')
    updateOneNorseman(@Param() { id }: { id: string } ,@Body() updateNorsemanDto: UpdateNorsemanDto) {
        return this.norsemenService.updateOneNorseman(id, updateNorsemanDto)
    }

    @Delete(':id')
    deleteOneNorseman(@Param() { id }: { id: string }) {
        return this.norsemenService.deleteOneNorseman(id)
    }
};