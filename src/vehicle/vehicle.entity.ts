import { Onboarding } from "src/on-boarding/on-boarding.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";

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
}