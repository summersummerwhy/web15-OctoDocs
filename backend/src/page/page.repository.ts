import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Page } from './page.entity';

@Injectable()
export class PageRepository extends Repository<Page> {
  constructor(private dataSource: DataSource) {
    super(Page, dataSource.createEntityManager());
  }
}
