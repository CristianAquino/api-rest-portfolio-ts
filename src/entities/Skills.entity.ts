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
import { Projects } from "./Projects.entity";
import { TypeSkill } from "../types";

@Entity({ name: "Skills" })
class Skills extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 64 })
  name: string;

  @Column({ type: "varchar" })
  icon: string;

  @Column({ type: "enum", enum: TypeSkill, default: TypeSkill.LANGUAGES })
  type: TypeSkill;

  // here relationship
  // take other relationship
  @ManyToOne(() => Users, (user) => user.skill)
  user: Relation<Users>;

  // take other relationship
  @ManyToOne(() => Projects, (project) => project.skill)
  project: Relation<Projects>;

  @CreateDateColumn({ type: "timestamp without time zone" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp without time zone" })
  updatedAd: Date;
}

export { Skills };
