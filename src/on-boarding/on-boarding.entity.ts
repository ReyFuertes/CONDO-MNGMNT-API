import { Document } from "src/document/document.entity";
import { Homeowner } from "src/homeowner/homeowner.entity";
import { Occupant } from "src/occupant/occupant.entity";
import { Spouse } from "src/spouse/spouse.entity";
import { Personal } from "src/personal/personal.entity";
import { Tenant } from "src/tenant/tenant.entity";
import { Vehicle } from "src/vehicle/vehicle.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity({ synchronize: true })
export class Onboarding extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ nullable: true })
  type: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: string;

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
  @JoinColumn({ name: 'partner_id' })
  spouse: Spouse;
}