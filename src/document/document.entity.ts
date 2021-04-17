import { Onboarding } from "src/on-boarding/on-boarding.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ synchronize: true })
export class Document extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ nullable: true })
  amenities_registration_form: string;

  @Column({ nullable: true })
  movein_notice_clearance_form: string;

  @Column({ nullable: true })
  residents_information_sheet: string;

  @Column({ nullable: true })
  vehicle_registration_car_sticker_form: string;

  @Column({ nullable: true })
  id_card_application_form: string;

  @Column({ nullable: true })
  signature_information_card: string;

  @Column({ nullable: true })
  waiver: string;

  @Column({ nullable: true })
  contract: string;

  @ManyToOne(() => Onboarding, m => m.documents,
    { nullable: true })
  @JoinColumn({ name: 'onboarding_id' })
  onboarding: Onboarding;
}