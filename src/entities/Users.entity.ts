import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { Images } from "./Images.entity";
import { Socials } from "./Socials.entity";
import { Projects } from "./Projects.entity";
import { Skills } from "./Skills.entity";

@Entity({ name: "Users" })
class Users extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 64 })
  name: string;

  @Column({ default: "", type: "varchar", length: 128 })
  first_name: string;

  @Column({ default: "", type: "varchar", length: 128 })
  second_name: string;

  @Column({ default: "", type: "varchar", length: 200 })
  description: string;

  @Column({ default: "", type: "varchar" })
  email: string;

  @Column({ type: "varchar", length: 32 })
  password: string;

  @Column({ type: "varchar" })
  cv_link: string;

  @Column({ type: "varchar", nullable: true })
  uuid: string;

  // here relationship
  @OneToOne(() => Images)
  @JoinColumn()
  image: Relation<Images>;

  // take other relationship
  @OneToMany(() => Socials, (social) => social.user)
  social: Relation<Socials>[];

  // take other relationship
  @OneToMany(() => Projects, (project) => project.user)
  project: Relation<Projects>[];

  // take other relationship
  @OneToMany(() => Skills, (skill) => skill.user)
  skill: Relation<Skills>[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAd: Date;
}

export { Users };
