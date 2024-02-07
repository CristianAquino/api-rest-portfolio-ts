import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { Images } from "./Images.entity";
import { Skills } from "./Skills.entity";
import { Users } from "./Users.entity";

@Entity({
  name: "Projects",
  orderBy: { createdAt: "DESC" },
})
class Projects extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 64 })
  title: string;

  @Column({ type: "varchar", length: 200 })
  description: string;

  @Column({ type: "varchar" })
  link: string;

  // here relationship
  @OneToOne(() => Images)
  @JoinColumn()
  image: Relation<Images>;

  // take other relationship
  @ManyToOne(() => Users, (user) => user.projects)
  user: Relation<Users>;

  // take other relationship
  @ManyToMany(() => Skills, (skill) => skill.project)
  @JoinTable()
  skills: Relation<Skills>[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAd: Date;
}

export { Projects };
