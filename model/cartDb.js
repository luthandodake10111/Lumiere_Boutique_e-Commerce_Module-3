import {pool} from '../config/config.js'

const getCart = async(user_id, callback)=> {
    const [cart] = await pool.query('SELECT * FROM cart WHERE user_id = ?',[user_id], (err, rows)=>{
        if(err) return callback(err);
        callback(null, rows)
    })
    return cart
    
}

const insertCartItem = async(user_id,product_id,quantity,added_at, callback)=>{
    await pool.query(
        'INSERT INTO cart (user_id, product_id, quantity, added_at) VALUES (?, ?, ?, ?) ONDUPLICATE KEY UPDATE quantity = quantity + ?' , 
        [user_id, product_id, quantity,quantity, added_at], (err, result)=>{
            if (err) return callback(err)
                callback(null, result)
        }
    );
    
    return {cart:user_id,product_id,quantity,added_at}

}

const updateCartItem = async(user_id,product_id,quantity,callback)=>{
    await pool.query(
        'UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?', 
        [quantity, user_id, product_id], (err, result)=>{
            if(err) return callback(err);
            callback(null, result)
        }
    );
    
    return await updateCartItem()
}

const removeCartItem = async(user_id,product_id, callback)=>{
    const result = await pool.query('DELETE FROM cart WHERE user_id = ? AND product_id = ?',[user_id,product_id], (err, result)=>{
        if(err) return callback(err);
        callback(null, result)
    });
    
    return result.affectedRows > 0 ? "Item removed successfully" : "Item not found";
};

const clearCart = async(user_id, callback)=>{
    await pool.query('DELETE FROM cart WHERE user_id = ?',[user_id], (err,result)=>{
        if(err) return callback(err);
        callback(null, result)
    })
}





export {getCart,insertCartItem,updateCartItem,removeCartItem, clearCart}