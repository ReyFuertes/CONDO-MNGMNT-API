import { Document } from "src/modules/document/document.entity";
import { Homeowner } from "src/modules/homeowner/homeowner.entity";
import { Occupant } from "src/modules/occupant/occupant.entity";
import { Spouse } from "src/modules/spouse/spouse.entity";
import { Personal } from "src/modules/personal/personal.entity";
import { Tenant } from "src/modules/tenant/tenant.entity";
import { Vehicle } from "src/modules/vehicle/vehicle.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity({ synchronize: false })
export class Onboarding extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ nullable: true })
  type: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: string;

  @Column({ nullable: false, default: false })
  onboarded: boolean;

  @Column({ nullable: false, default: false })
  is_archived: boolean;

  @Column({ nullable: false, default: false })
  is_deleted: boolean;

  @OneToMany(() => Occupant, o => o.onboarding, { nullable: true, cascade: true })
  occupants: Occupant[];

  @OneToMany(() => Vehicle, o => o.onboarding, { nullable: true, cascade: true })
  vehicles: Vehicle[];

  @OneToMany(() => Document, o => o.onboarding, { nullable: true, cascade: true })
  documents: Document[];

  @ManyToOne(() => Personal, p => p.onboarding,
    { nullable: true, cascade: true })
  @JoinColumn({ name: 'personal_id' })
  personal: Personal;

  @ManyToOne(() => Spouse, p => p.onboarding,
    { nullable: true, cascade: true })
  @JoinColumn({ name: 'spouse_id' })
  spouse: Spouse;

  @OneToMany(() => Homeowner, o => o.onboarding, { nullable: true })
  homeowner: Homeowner;
}