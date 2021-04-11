import { Onboarding } from "src/on-boarding/on-boarding.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ synchronize: true })
export class Document extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @ManyToOne(() => Onboarding, m => m.documents,
    { nullable: true, cascade: true })
  @JoinColumn({ name: 'onboarding_id' })
  onboarding: Onboarding;
}