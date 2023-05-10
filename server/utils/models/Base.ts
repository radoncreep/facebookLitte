
// BaseModel serves as a template to sub-classes that extends it
// providing them with these boilerplate of properties and methods
export abstract class BaseModel {
    constructor() {
        //  could initialize database here 
    }

    async findOne(field: string) {

    }

    async findById(id: string) {

    }

    async findAll() {

    }

    async save() {

    }

    async updateOne(field: string) {

    }

    async updateById(id: string) {

    }

    async deleteOne(field: string) {

    }

    async deleteById(id: string) {

    }
}