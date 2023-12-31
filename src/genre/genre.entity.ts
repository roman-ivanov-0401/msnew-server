import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genre')
export class GenreEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
