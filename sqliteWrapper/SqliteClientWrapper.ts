import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export class SQLiteClient {
  private db: sqlite3.Database;

  constructor(dbFilePath: string) {
    this.db = new sqlite3.Database(dbFilePath);
  }

  public async run(sql: string, params?: any[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.run(sql, params, (err: Error | null) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  public async get<T>(sql: string, params?: any[]): Promise<T | undefined> {
    return new Promise<T | undefined>((resolve, reject) => {
      this.db.get(sql, params, (err: Error | null, row: T) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  public async all<T>(sql: string, params?: any[]): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
      this.db.all(sql, params, (err: Error | null, rows: T[]) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  public async close(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.close((err: Error | null) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

export const createConnection = async (dbFilePath: string = './database.db'): Promise<SQLiteClient> => {
  const db = await open({
    filename: dbFilePath,
    driver: sqlite3.Database
  });
  return new SQLiteClient(dbFilePath);
};
