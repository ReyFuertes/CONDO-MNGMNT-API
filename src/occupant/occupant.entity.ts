import { Onboarding } from "src/on-boarding/on-boarding.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ synchronize: true })
export class Occupant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  relationship: string;

  @ManyToOne(() => Onboarding, m => m.occupants,
    { nullable: true })
  @JoinColumn({ name: 'onboarding_id' })
  onboarding: Onboarding;
}