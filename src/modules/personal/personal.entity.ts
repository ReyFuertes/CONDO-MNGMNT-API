import { Image } from "src/modules/image/image.entity";
import { Onboarding } from "src/modules/on-boarding/on-boarding.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Generated, Column, OneToMany, ManyToOne, OneToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Homeowner } from "../homeowner/homeowner.entity";

@Entity({ synchronize: false })
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
  contactNo?: string;
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
  uploadPersonalIdFile?: string;
  @Column({ nullable: true })
  uploadedFilePreview?: string
  @CreateDateColumn({ type: 'timestamptz', precision: 6 })
  created_at: Date;

  @OneToMany(() => Onboarding, o => o.personal)
  onboarding: Onboarding;

  @OneToMany(() => Homeowner, o => o.personal)
  homeowner: Homeowner;

  @OneToMany(() => Image, o => o.personal)
  image: Image;
}