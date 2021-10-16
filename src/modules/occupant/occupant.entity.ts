import { Onboarding } from "src/modules/on-boarding/on-boarding.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Homeowner } from "../homeowner/homeowner.entity";

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

  @ManyToOne(() => Homeowner, m => m.occupants,
    { nullable: true })
  @JoinColumn({ name: 'homeowner_id' })
  homeowner: Homeowner;
}