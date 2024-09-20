import connection from '../../../connection/database.ts';

export async function index(Req:any, res: any) {
    connection.query('select * from m_user_tab', (err, result) => {
        if (err) throw err;
        res.json({
            'error_code' : null,
            'message' : 'USER ALL', 
            'data' : result
        });    
    });
}

export async function store (req:any, res: any) {
    const maps = req.body;
   return res.json(maps);
}     

export async function show(req:any, res: any) {
    connection.query(`select * from m_user_tab where id = ${req.body.id}`, (err, result) => {
        if (err) throw err;
        res.json({
            'error_code' : null,
            'message' : 'USER ME', 
            'data' : result
        });    
    });
}

export async function update(req:any, res: any) {
    connection.query(`UPDATE m_user_tab SET where id = ${req.body.id}`, (err, result) => {
        if (err) throw err;
        res.json({
            'error_code' : null,
            'message' : 'USER ME', 
            'data' : result
        });    
    });
}

export async function deleted(req:any, res: any) {
    connection.query(`UPDATE m_user_tab SET where id = ${req.body.id}`, (err, result) => {
        if (err) throw err;
        res.json({
            'error_code' : null,
            'message' : 'USER ME', 
            'data' : result
        });    
    });
}
    
