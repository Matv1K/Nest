import { Controller, Get, Post, Body } from "@nestjs/common";
import { TestService } from "./test.service";
import { CreateTestEntityDto } from "./test.dto";


@Controller("test")
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get()
    getTest(): string {
        return this.testService.getTest()
    }

    @Post()
    createTestEntity(@Body() createTestEntityDto: CreateTestEntityDto): string {
        console.log(createTestEntityDto.content);
        return `This endpoint was reached by user number ${createTestEntityDto.userId}`
    }
};