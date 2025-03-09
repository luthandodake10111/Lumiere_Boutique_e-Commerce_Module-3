import { pool } from "../config/config.js";

const Payment = {
  createPayment: async (order_id, payment_method, payment_amount) => {
    const sql = `INSERT INTO payments (order_id, payment_method, payment_amount) VALUES (?, ?, ?);`;
    const [result] = await pool.query(sql, [order_id, payment_method, payment_amount]);
    return result.insertId;
  },

  confirmPayment: async (payment_id, transaction_reference) => {
    const sql = `UPDATE payments SET payment_status = 'confirmed', transaction_reference = ? WHERE payment_id = ?;`;
    await pool.query(sql, [transaction_reference, payment_id]);
  },

  getPaymentByOrderId: async (order_id) => {
    const sql = `SELECT * FROM payments WHERE order_id = ?;`;
    const [results] = await pool.query(sql, [order_id]);
    return results;
  }
};


export { Payment };
