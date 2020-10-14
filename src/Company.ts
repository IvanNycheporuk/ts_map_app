import faker from 'faker';

import { Mappable } from './CustomMap';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number
    };
    color: string = 'red';

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        }
    }

    markableContent(): string {
        return `
            <div>
                <h1>Company name is ${this.companyName}</h1>
                <h3>Company phrase is: ${this.catchPhrase}</h3>
            </div>
        `
    }
}