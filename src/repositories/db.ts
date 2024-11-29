
import { Pool } from 'pg'
import { parse, ConnectionOptions } from 'pg-connection-string'

const config: ConnectionOptions = parse(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/practice-db')

// @ts-expect-error The outputs do not differ with undefined checks
const pool = new Pool({ ...config, ssl: false })

const getDataBaseConnection = () => pool

export { getDataBaseConnection };
