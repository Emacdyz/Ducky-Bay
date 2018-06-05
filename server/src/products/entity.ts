// src/products/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsEmail, Length, IsString } from 'class-validator'


@Entity()
export default class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Length(10, 50)
  @Column('text', {nullable:false})
  title: string

  @Column('text', {nullable:false})
  description: string

  @IsString()
  @Column('text', {nullable:false})
  picture: string

  @Column('integer', {nullable:false})
  price: number

  @IsEmail()
  @Column('text', {nullable:false})
  email: string

  @IsString()
  @Column('text', {nullable:false})
  phone: string
}
