import { Onboarding } from "src/modules/on-boarding/on-boarding.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Homeowner } from "../homeowner/homeowner.entity";

@Entity({ synchronize: true })
export class Vehicle extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ nullable: true })
  model: string;

  @Column({ nullable: true })
  make: string;

  @Column({ nullable: true })
  plateNo: string;

  @ManyToOne(() => Onboarding, m => m.vehicles,
    { nullable: true })
  @JoinColumn({ name: 'onboarding_id' })
  onboarding: Onboarding;

  @ManyToOne(() => Homeowner, m => m.vehicles,
    { nullable: true })
  @JoinColumn({ name: 'homeowner_id' })
  homeowner: Homeowner;
}