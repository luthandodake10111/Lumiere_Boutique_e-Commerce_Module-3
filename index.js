import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
let pwd = '1234Azola'

// callback function method
// The server might take longer to respond if the salt number in is high but your password will be better protected
// The hash function takes in 3 parameters(data, salt, callback function)

// bcrypt.hash(pwd,10,(err,hashedPassword)=>{
//     console.log(pwd);
    
//     if(err){
//         throw err
//     }
//     console.log(hashedPassword);

// })

// async and await method

// const hashingFunction =async (password)=>{
//     console.log(password);
//     if(password == undefined) throw new Error("Please enter a valid password")
//     let hashedPassword = await bcrypt.hash(password,10)
//     console.log(hashedPassword);
    
// }
// hashingFunction(pwd)

// compare function method

// callback

// 1st hash = $2b$10$/Y0ejJukEvhZ7v.b4elGCe7aIsSmey3P1xqT6TKnH362YPNbqSlYe
// 2nd hash = $2b$10$8QrsWQ6HR2R53/XKz5WnvOzquCZZ3xsnEvF98DlPljuDofpjcbb5C

// bcrypt.compare(pwd, "$2b$10$8QrsWQ6HR2R53/XKz5WnvOzquCZZ3xsnEvF98DlPljuDofpjcbb5C",(err, result)=>{
//     if (err) throw err
//     console.log(result);

    
// })

// async and await 

// const comparingFunction = async (password, hashedPassword)=>{
//     let result = await bcrypt.compare(password,hashedPassword)
//     console.log(result);
    
// }
// comparingFunction(pwd, "$2b$10$8QrsWQ6HR2R53/XKz5WnvOzquCZZ3xsnEvF98DlPljuDofpjcbb5C")

// const signToken = (email)=>{
//     let token = jwt.sign({email:email},'123456789Azola',{expiresIn: 1})
//     console.log(token);
    
// }
// signToken('azolah@gmail.com')

// const verifyToken = ()=>{
//     let result = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6b2xhaEBnbWFpbC5jb20iLCJpYXQiOjE3NDAwNTUwOTgsImV4cCI6MTc0MDA1NTA5OX0.yvg9BOZsLNfijAYON0lAUdWnAF482X8pCXMTlO-d7hc', '123456789Azola')
//     console.log(result);
    
// }
// console.log(verifyToken());

// user sign in bcrypt - checks and compares password , if correct- user must get token and gain access to the website 

