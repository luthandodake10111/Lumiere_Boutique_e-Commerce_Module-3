import {pool} from '../config/config.js'

const getOrder = async(user_id, total_amount, shipping_address)=>{
    await pool.query('INSERT INTO orders (user_id, total_amount, shipping_address, status VALUES(?,?,?, "pending")',[user_id,total_amount,shipping_address], (err,result)=>{
        if(err) return (err);
        (null, result);
    })

};

const updateOrderStatus = async (order_id, status) => {
    await pool.query("UPDATE orders SET status = ? WHERE order_id = ?", [status, order_id]);
};



export{getOrder, updateOrderStatus}