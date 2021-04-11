import { Onboarding } from "src/on-boarding/on-boarding.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity({ synchronize: true })
export class Personal extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ nullable: true })
  buildingNo?: string;
  @Column({ nullable: true })
  unitNo?: string;
  @Column({ nullable: true })
  parkingSlot?: string;
  @Column({ nullable: true })
  occupantType?: string;
  @Column({ nullable: true })
  lastname?: string;
  @Column({ nullable: true })
  firstname?: string;
  @Column({ nullable: true })
  middlename?: string;
  @Column({ nullable: true })
  citizenship?: string;
  @Column({ nullable: true })
  gender?: string;
  @Column({ nullable: true })
  civilStatus?: string;
  @Column({ nullable: true })
  dateOfBirth?: string;
  @Column({ nullable: true })
  occupation?: string;
  @Column({ nullable: true })
  busAddress?: string;
  @Column({ nullable: true })
  busContactNo?: string;
  @Column({ nullable: true })
  busEmail?: string;
  @Column({ nullable: true })
  tin?: string;
  @Column({ nullable: true })
  idType?: string;
  @Column({ nullable: true })
  idNo?: string;
  @Column({ nullable: true })
  uploadedIdFile?: string;
  @Column({ nullable: true })
  uploadedFilePreview?: string

  @OneToMany(() => Onboarding, o => o.personal)
  onboarding: Onboarding;
}