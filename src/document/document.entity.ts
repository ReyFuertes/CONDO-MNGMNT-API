import { Onboarding } from "src/on-boarding/on-boarding.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ synchronize: true })
export class Document extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ nullable: true, type: 'bigint' })
  lastModified: string;
  @Column({ nullable: true })
  lastModifiedDate: Date;
  @Column({ nullable: true })
  name: string
  @Column({ nullable: true, type: 'bigint' })
  size: string;
  @Column({ nullable: true })
  type: string;

  @ManyToOne(() => Onboarding, m => m.documents,
    { nullable: true })
  @JoinColumn({ name: 'onboarding_id' })
  onboarding: Onboarding;
}