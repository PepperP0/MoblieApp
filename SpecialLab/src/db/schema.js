export const DATABASE_NAME = 'expense.db'

const SEED_CATEGORIES = [
    ['เงินเดือน', 'income','#3fb950'],
    ['รายได้เสริม','income', '#2f81f7'],
    ['อาหาร', 'expense','#f0a93b'],
    ['ค่าเดินทาง', 'expense','#61dafb'],
    ['ที่พัก','expense','#a371f7'],
    ['ของใช้','expense','#d86d28'],
    ['บันเทิง','expense','#db61a2'],
    ['อื่นๆ', 'expense','#8b949e'],
]

export async function initDB(db) {
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        PRAGMA foreign_keys = ON;
        
        CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name   TEXT   NOT NULL   UNIQUE,
            kind   TEXT   NOT NULL   CHECK(kind IN('income','expense')),
            color  TEXT   NOT NULL     
        );
    
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category_id     INTEGER     NOT NULL,
            amount          INTEGER     NOT NULL CHECK(amount > 0),
            note            TEXT        NOT NULL    DEFAULT '',
            spent_at        TEXT        NOT NULL,
            created_at      INTEGER     NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_tx_spent_at ON 
        transactions(spent_at);
        CREATE INDEX IF NOT EXISTS idx_tx_category ON 
        transactions(category_id);
    `)

    const row = await db.getFirstAsync(`SELECT COUNT(*) AS n FROM 
        categories`)
        if (row.n> 0 ) return ; 

        await db.withTransactionAsync(async () => {
            for (const [name,kind, color] of SEED_CATEGORIES) {
                await db.runAsync(
                    `INSERT INTO categories(name, kind, color) VALUES 
                    (?,?,?)`,[name,kind,color] 
                )
            }
        })
}