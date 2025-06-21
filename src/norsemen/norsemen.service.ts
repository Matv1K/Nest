import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateNorsemanDto } from "./dto/create-norseman-dto";
import { UpdateNorsemanDto } from "./dto/update-norseman-dto";
import { INorseman } from "interfaces";

@Injectable()
export class NorsemenService {
    private norsemen: INorseman[] = [];

    getAllNorsemen(): INorseman[] {
        return this.norsemen;
    }

    getOneNorseman(id: string): INorseman {
        const norseman = this.norsemen.find((n) => n.id === Number(id));

        if (!norseman) {
            throw new NotFoundException(`Norseman with id ${id} not found`);
        }

        return norseman;
    }

    addOneNorseman(createNorsemanDto: CreateNorsemanDto): INorseman {
        const newNorseman: INorseman = { id: Number(Date.now()), ...createNorsemanDto,};
        this.norsemen.push(newNorseman);
        return newNorseman;
    }

    updateOneNorseman(id: string, updateNorsemanDto: UpdateNorsemanDto): INorseman {
        const index = this.norsemen.findIndex((n) => n.id === Number(id));

        if (index === -1) {
            throw new NotFoundException(`Norseman with id ${id} not found`);
        }

        const updatedNorseman = {...this.norsemen[index], ...updateNorsemanDto};

        this.norsemen[index] = updatedNorseman;
        return updatedNorseman;
    }

    deleteOneNorseman(id: string): string {
        const index = this.norsemen.findIndex((n) => n.id === Number(id));

        if (index === -1) {
            throw new NotFoundException(`Norseman with id ${id} not found`);
        }

        this.norsemen.splice(index, 1);
        return `Norseman number ${id} has gone to Valhalla`;
    }
}
