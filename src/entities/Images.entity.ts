import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "Images", orderBy: { createdAt: "DESC" } })
class Images extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  thumbnail: string | null;

  @Column({
    type: "varchar",
    default: "https://i.postimg.cc/TYQNb7pz/small.png",
  })
  small: string;

  // here relationship

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAd: Date;
}

export { Images };
