// src/products/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Length } from 'class-validator'


@Entity()
export default class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  picture: any

  @Length(5, 50)
  @Column('text')
  title: string

  @Column('text')
  description: string

  @Column('integer')
  price: number

}
