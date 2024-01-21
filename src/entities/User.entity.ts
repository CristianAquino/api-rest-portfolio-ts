import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("Users")
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 64 })
  name: string;

  @Column({ default: "", type: "varchar", length: 128 })
  firstName: string;

  @Column({ default: "", type: "varchar", length: 128 })
  secondName: string;

  @Column({ type: "varchar", length: 32 })
  password: string;

  @Column({ default: "", type: "varchar" })
  email: string;

  @CreateDateColumn({ type: "timestamp without time zone" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp without time zone" })
  updatedAd: Date;
}

export { User };
