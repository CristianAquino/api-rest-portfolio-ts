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

@Entity({ name: "Socials" })
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
  @ManyToOne(() => Users, (user) => user.social)
  user: Relation<Users>;

  @CreateDateColumn({ type: "timestamp without time zone" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp without time zone" })
  updatedAd: Date;
}

export { Socials };
