import { Homeowner } from "src/homeowner/homeowner.entity";
import { Tenant } from "src/tenant/tenant.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ synchronize: true })
export class Children extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  // @ManyToOne(() => Homeowner, m => m.children,
  //   { nullable: true })
  // @JoinColumn({ name: 'homeowner_id' })
  // homeowner: Homeowner;

  @ManyToOne(() => Tenant, m => m.children,
    { nullable: true })
  @JoinColumn({ name: 'tenant_id' })
  tenant: Tenant;
}