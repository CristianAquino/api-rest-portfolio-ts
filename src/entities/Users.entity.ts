import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { Images } from "./Images.entity";
import { Socials } from "./Socials.entity";
import { Projects } from "./Projects.entity";
import { Skills } from "./Skills.entity";
import { NextFunction, Request, Response } from "express";
import { CreatedError } from "../utils";

@Entity({ name: "Users", orderBy: { createdAt: "DESC" } })
@Unique(["email"])
class Users extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 64 })
  name: string;

  @Column({ type: "varchar", length: 64 })
  first_name: string;

  @Column({ type: "varchar", length: 64 })
  second_name: string;

  @Column({ type: "varchar", length: 200 })
  description: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar", nullable: true })
  cv_link: string | null;

  @Column({ type: "varchar", nullable: true })
  uuid: string | null;

  @Column({ type: "varchar", length: 4, nullable: true })
  code: string | null;

  // here relationship
  @OneToOne(() => Images)
  @JoinColumn()
  image: Relation<Images>;

  // take other relationship
  @OneToMany(() => Socials, (social) => social.user)
  socials: Relation<Socials>[];

  // take other relationship
  @OneToMany(() => Projects, (project) => project.user)
  projects: Relation<Projects>[];

  // take other relationship
  @OneToMany(() => Skills, (skill) => skill.user)
  skills: Relation<Skills>[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAd: Date;

  @BeforeInsert()
  async checkUserLimit(req: Request, res: Response) {
    const count = await Users.count();
    if (count >= 1) {
      throw new CreatedError(
        "Only a maximum of one registered user is allowed."
      );
    }
  }
}

export { Users };
