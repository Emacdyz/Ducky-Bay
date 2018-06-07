// src/products/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Length } from 'class-validator'


@Entity()
export default class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  picture: any

  @Length(5, 50)
  @Column('text', {nullable:false})
  title: string

  @Column('text', {nullable:false})
  description: string

  @Column('integer', {nullable:false})
  price: number

}
