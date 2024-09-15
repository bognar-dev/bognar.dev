'use server'

import { sql } from '@vercel/postgres';

interface Log {
  id: number;
  action: string;
  details: string;
  timestamp: string;
}

export async function getLogs(page: number = 1, pageSize: number = 10) {
  const offset = (page - 1) * pageSize;
  
  try {
    const result = await sql<Log>`
      SELECT id, action, details, timestamp::text
      FROM logs
      ORDER BY timestamp DESC
      LIMIT ${pageSize} OFFSET ${offset}
    `;

    const totalCount = await sql`SELECT COUNT(*) FROM logs`;

    return {
      logs: result.rows,
      totalCount: parseInt(totalCount.rows[0].count),
    };
  } catch (error) {
    console.error('Error fetching logs:', error);
    throw new Error('Failed to fetch logs');
  }
}