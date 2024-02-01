import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { Users } from "./Users.entity";

@Entity({ name: "Socials", orderBy: { createdAt: "DESC" } })
class Socials extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 128 })
  name: string;

  @Column({ type: "varchar" })
  link: string;

  @Column({ type: "varchar", length: 8 })
  color: string;

  // here relationship
  // take other relationship
  @ManyToOne(() => Users, (user) => user.socials)
  user: Relation<Users>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAd: Date;
}

export { Socials };
