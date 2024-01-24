import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { Images } from "./Images.entity";
import { Users } from "./Users.entity";
import { Skills } from "./Skills.entity";

@Entity({
  name: "Projects",
  orderBy: {
    CreateDateColumn: "DESC",
  },
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
  @ManyToOne(() => Users, (user) => user.project)
  user: Relation<Users>;

  // take other relationship
  @OneToMany(() => Skills, (skill) => skill.project)
  skill: Relation<Skills>[];

  @CreateDateColumn({ type: "timestamp without time zone" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp without time zone" })
  updatedAd: Date;
}

export { Projects };
