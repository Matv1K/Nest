import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Norseman } from "./norseman.entity";
import { INorseman } from "./interfaces/norsemen.interface";

@Injectable()
export class NorsemenService {
    constructor(@InjectRepository(Norseman) private readonly repo: Repository<Norseman>) {}

    getAllNorsemen(): Promise<INorseman[]> {
        return this.repo.find();
    }

    async getOneNorseman(id: string): Promise<Norseman> {
        const norseman = await this.repo.findOne({ where: { id: Number(id) }})

        if (!norseman) {
            throw new NotFoundException(`Norseman with id ${id} not found`);
        }

        return norseman;
    }

    addOneNorseman(data: { name: string; description: string }) {
        const newNorseman = this.repo.create(data);
        return this.repo.save(newNorseman);
    }

    async updateOneNorseman(id: string, data: { name: string; description: string }): Promise<Norseman> {
        const norseman = await this.repo.findOne({ where: { id: Number(id) }});

        if (!norseman) {
            throw new NotFoundException(`Norseman with id ${id} not found`);
        }

        norseman.name = data.name;
        norseman.description = data.description;

        return await this.repo.save(norseman);
    }

    async deleteOneNorseman(id: string): Promise<string> {
        await this.repo.delete(id);
        return `Norseman with id ${id} has gone to Valhalla`;
    }
}
