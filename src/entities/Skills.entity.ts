import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { Projects } from "./Projects.entity";
import { Users } from "./Users.entity";

@Entity({ name: "Skills", orderBy: { createdAt: "DESC" } })
class Skills extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 64 })
  name: string;

  @Column({ type: "varchar" })
  icon: string;

  @Column({ type: "varchar" })
  type: string;

  // here relationship
  // take other relationship
  @ManyToOne(() => Users, (user) => user.skills)
  user: Relation<Users>;

  // take other relationship
  @ManyToMany(() => Projects, (project) => project.skills)
  project: Relation<Projects>[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAd: Date;
}

export { Skills };
