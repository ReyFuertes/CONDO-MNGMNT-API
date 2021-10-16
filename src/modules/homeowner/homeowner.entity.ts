import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn, Unique } from "typeorm";
import { Children } from "../children/children.entity";
import { Document } from "../document/document.entity";
import { Occupant } from "../occupant/occupant.entity";
import { Onboarding } from "../on-boarding/on-boarding.entity";
import { Personal } from "../personal/personal.entity";
import { Spouse } from "../spouse/spouse.entity";
import { Vehicle } from "../vehicle/vehicle.entity";

@Entity({ synchronize: true })
export class Homeowner extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @ManyToOne(() => Onboarding, p => p.homeowner,
    { nullable: true, cascade: true })
  @JoinColumn({ name: 'onboarding_id' })
  onboarding: Onboarding;

  @ManyToOne(() => Personal, p => p.homeowner,
    { nullable: true, cascade: true })
  @JoinColumn({ name: 'personal_id' })
  personal: Personal;

  @ManyToOne(() => Spouse, p => p.homeowner,
    { nullable: true, cascade: true })
  @JoinColumn({ name: 'spouse_id' })
  spouse: Spouse;

  @OneToMany(() => Occupant, o => o.homeowner, { nullable: true, cascade: true })
  occupants: Occupant[];

  @OneToMany(() => Vehicle, o => o.homeowner, { nullable: true, cascade: true })
  vehicles: Vehicle[];

  @OneToMany(() => Document, m => m.homeowner, { nullable: true, cascade: true })
  documents: Document[];
}