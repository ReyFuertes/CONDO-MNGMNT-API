import { Tenant } from "src/modules/tenant/tenant.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ synchronize: false })
export class Business extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  // @ManyToOne(() => Homeowner, m => m.business,
  //   { nullable: true })
  // @JoinColumn({ name: 'homeowner_id' })
  // homeowner: Homeowner;
  // @ManyToOne(() => Spouse, m => m.business,
  //   { nullable: true })
  // @JoinColumn({ name: 'partner_id' })
  // spouse: Spouse;

  @ManyToOne(() => Tenant, m => m.business,
    { nullable: true })
  @JoinColumn({ name: 'tenant_id' })
  tenant: Tenant;
}