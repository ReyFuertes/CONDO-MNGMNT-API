import { Homeowner } from "src/homeowner/homeowner.entity";
import { Partner } from "src/partner/partner.entity";
import { Tenant } from "src/tenant/tenant.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ synchronize: true })
export class Business extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  // @ManyToOne(() => Homeowner, m => m.business,
  //   { nullable: true })
  // @JoinColumn({ name: 'homeowner_id' })
  // homeowner: Homeowner;
  // @ManyToOne(() => Partner, m => m.business,
  //   { nullable: true })
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  @ManyToOne(() => Tenant, m => m.business,
    { nullable: true })
  @JoinColumn({ name: 'tenant_id' })
  tenant: Tenant;
}