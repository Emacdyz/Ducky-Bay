// src/products/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Length, IsString } from 'class-validator'


@Entity()
export default class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  picture: string

  @Length(5, 50)
  @Column('text', {nullable:false})
  title: string

  @Column('text', {nullable:false})
  description: string

  @Column('integer', {nullable:false})
  price: number

  // @IsEmail()
  // @Column('text', {nullable:false})
  // email: string

  // @IsString()
  // @Column('text', {nullable:false})
  // phone: string
}
