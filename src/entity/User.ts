import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    PrimaryColumn,
    BeforeInsert,
    BaseEntity,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn("uuid") id: string;
    @Column("varchar", { length: 255 }) email: string;
    @Column("text") password: string;
    @Column("varchar", { length: 255 }) firstName: string;
    @Column("varchar", { length: 255 }) lastName: string;
    @Column("integer") sustainableScore: number;
    @Column("uuid") post_id: string;
    @Column("uuid") comment_id: string;

    @BeforeInsert()
    addId() {
        this.id = uuidv4();
    }
}
