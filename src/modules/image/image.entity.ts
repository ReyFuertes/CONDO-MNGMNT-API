import { Personal } from "src/modules/personal/personal.entity";
import { Spouse } from "src/modules/spouse/spouse.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, CreateDateColumn, JoinColumn } from "typeorm";

@Entity({ synchronize: true })
export class Image extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: string;

  @ManyToOne(() => Personal, p => p.image,
    { nullable: true, cascade: true })
  @JoinColumn({ name: 'personal_id' })
  personal: Personal;

  @ManyToOne(() => Spouse, s => s.image,
    { nullable: true, cascade: true })
  @JoinColumn({ name: 'spouse_id' })
  spouse: Spouse;
}