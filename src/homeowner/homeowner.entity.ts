import { Business } from "src/business/business.entity";
import { Children } from "src/children/children.entity";
import { Onboarding } from "src/on-boarding/on-boarding.entity";
import { Partner } from "src/partner/partner.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne } from "typeorm";

@Entity({ synchronize: true })
export class Homeowner extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;
  @Column({ nullable: true })
  firstname: string;
  @Column({ nullable: true })
  lastname: string;
  @Column({ nullable: true })
  middlename: string;
  @Column({ nullable: true })
  citizenship: string;
  @Column({ nullable: true })
  gender: string;
  @Column({ nullable: true })
  marital_status: string;
  @Column({ nullable: true })
  date_of_birth: string;
  @Column({ nullable: true })
  occupation: string;
  @Column({ nullable: true })
  contact_no: string;
  @Column({ nullable: true })
  id_type: string;
  @Column({ nullable: true })
  id_no: string;
  @Column({ nullable: true })
  uploaded_file: string;

  // @OneToMany(() => Onboarding, o => o.homeowner)
  // onboarding: Onboarding;
  // @OneToMany(() => Partner, o => o.homeowner)
  // partner: Partner;
  // @OneToMany(() => Children, o => o.homeowner)
  // children: Children;
  // @OneToMany(() => Business, o => o.homeowner)
  // business: Business;
}