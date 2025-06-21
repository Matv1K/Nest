import { Injectable } from "@nestjs/common";
import { CreateNorsemanDto } from "./dto/create-norseman-dto";
import { UpdateNorsemanDto } from "./dto/update-norseman-dto";

@Injectable()
export class NorsemenService {
    getAllNorsemen(): string {
        return "All Norsemen are here"
    }

    getOneNorseman(id: string): string {
        return `Norseman number ${id} has answered the call`
    }

    addOneNorseman(createNorsemanDto: CreateNorsemanDto): string {
        return `Norseman ${createNorsemanDto.name} has embarked on the journey`
    }

    updateOneNorseman(updateNorsemanDto: UpdateNorsemanDto): string {
        return `Norseman number ${updateNorsemanDto.id} has changed his name to ${updateNorsemanDto.name} and his current description is ${updateNorsemanDto.description}`
    }

    deleteOneNorseman(id: string): string {
        return `Norseman number ${id} has gone to Valhalla`
    }
}
