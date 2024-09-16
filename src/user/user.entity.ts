import { Entity, Column} from "typeorm";

@Entity()
export class User {
    @Column()
    public id: string;

    @Column()
    public name: string;
    
    @Column()
    public email: string;
}