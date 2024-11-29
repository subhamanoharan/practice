import ArticlesRepo from '../src/repositories/articlesRepo';
import { faker } from '@faker-js/faker';

const createBulk = async (count: number) => {
  for(let i = 1; i<=count; i++) {
    const id = await ArticlesRepo.create({name: faker.book.title()})
    console.log(id)

  }
}

createBulk(10)
