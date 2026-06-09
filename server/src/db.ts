import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function query<T>(sql: string, retries = 3): Promise<T[]> {
  try {
    // Escape single quotes in the SQL string
    const escapedSql = sql.replace(/'/g, "'\\''");
    const { stdout, stderr } = await execAsync(`team-db '${escapedSql}'`);
    
    if (stderr && !stderr.includes('Warning')) {
      console.error('team-db stderr:', stderr);
    }
    
    if (!stdout) return [];
    
    try {
      return JSON.parse(stdout) as T[];
    } catch (parseError) {
      console.error('Failed to parse team-db output:', stdout);
      throw parseError;
    }
  } catch (error: any) {
    if (retries > 0 && error.message.includes('Locking error')) {
      console.log(`Locking error, retrying... (${retries} left)`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return query(sql, retries - 1);
    }
    console.error('Database query error:', error);
    throw error;
  }
}

export async function execute(sql: string): Promise<void> {
  await query(sql);
}
