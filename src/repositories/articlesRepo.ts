import { getDataBaseConnection } from './db';

export interface Article {
  id: number;
  name: string;
}

const create = async (article: {name: string}) => {
  const sql = 'INSERT INTO articles(name, created_at) VALUES ($1, NOW()) RETURNING id'
  const sqlData = [article.name]
  const result = await getDataBaseConnection().query(sql, sqlData)
  return result.rows[0].id
}

function getAll(): Promise<Article[]> {
  console.log('Getting articles.....')
  const query = 'select * from articles'
  return getDataBaseConnection()
   .query(query)
   .then(({rows}) => rows)
}

function getLimit(limit: number): Promise<Article[]> {
  console.log('Getting articles with limit.....')
  const query = `select * from articles limit ${limit}`
  return getDataBaseConnection()
   .query(query)
   .then(({rows}) => rows)
}

function get(id: string): Promise<Article> {
  console.log('Getting article with id.....'+id)
  const query = `select * from articles where id=$1`
  return getDataBaseConnection()
   .query(query, [id])
   .then(({rows}) => rows[0])
}

export default { create, getAll, getLimit, get };
