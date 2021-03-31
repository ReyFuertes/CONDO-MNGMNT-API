import { Business } from "src/business/business.entity";
import { Homeowner } from "src/homeowner/homeowner.entity";
import { Tenant } from "src/tenant/tenant.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ synchronize: true })
export class Partner extends BaseEntity {
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

  @OneToMany(() => Business, o => o.partner)
  business: Business;

  @ManyToOne(() => Homeowner, m => m.partner,
    { nullable: true })
  @JoinColumn({ name: 'homeowner_id' })
  homeowner: Homeowner;
  @ManyToOne(() => Tenant, m => m.partner,
    { nullable: true })
  @JoinColumn({ name: 'tenant_id' })
  tenant: Tenant;
}