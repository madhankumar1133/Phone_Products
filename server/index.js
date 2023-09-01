const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mycon = require('mysql');
const fileupload = require('express-fileupload');
const { response, request } = require('express');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileupload());
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Madhan*18",
    database : "kpr_data"
});

c.connect(function(error){
    if(error){console.log(error);}
    else{console.log('Database Connected');}
})

app.post('/Regiester',(request,response)=>{
    let {username,password,email,phone} = request.body;

    let sql = 'insert into signup(username,password,email,phone) values (?,?,?,?)';

    c.query(sql,[username,password,email,phone],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Registered"};
            response.send(s);
        }
    })

})

app.post('/Signin',(request,response)=>{
    let {username,password} = request.body;
    let sql = 'select * from signup where username=?';
    
    c.query(sql,[username],(error,result)=>{
        if(error){
            
            let s = {"status":"error"};
            response.send(s);
        }
        else if(result.length > 0){

            let id = result[0].id;
            let username1 = result[0].username;
            let password1 = result[0].password;
            
            if(username1 == username && password1 == password){
                let s = {"status":"success","userid":id};
                response.send(s);
            }
            else{
                let s = {"status":"Invalid"};
                response.send(s);
            }
        }
        else{
            let s ={"status":"final_error"};
            response.send(s);
        }
    })
})

app.get('/Get_userdetails/:id',(request,response)=>{
    let {id} = request.params;
    let sql = 'select * from signup where id=?';

    c.query(sql,[id],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            response.send(result);
        }
    })   
})

app.post('/Add_orders',(request,response)=>
{
    let userid=request.body.userid;

    let {laptop,phone,accessories}=request.body;

    let sql ='insert into products(userid,laptop,phone,accessories) values (?,?,?,?)';

    c.query(sql,[userid,laptop,phone,accessories],(error,result)=>{

        if(error)
        {
            let s={"status":"error"};
            response.send(s);
        }
        else{
            let s ={"status":"uploaded"}
            response.send(s);
        }
    })
})


app.get('/Get_orderdetails/:userid',(request,response)=>{

    let {userid}=request.params;



    let sql='select * from products where userid=?;';

    c.query(sql,[userid],(error,result)=>{
        if(error)
        {
            response.send(error);

        }
        else{
            response.send(result);

        }
    })
})

app.post('/Delete_order',(request,response)=>{
    let s_no=request.body.s_no;
    let sql='delete from products where S_no=?';

    c.query(sql,[s_no],(error,result)=>{
        if(error){
            let b={"status":"error"};
            response.send(b);
            
        }
        else{
            let b={"status":"delete"};
            response.send(b)
        }
    })
})

app.get('/Get_updateorder/:s_no',(request,response)=>{

    let {s_no} =request.params;
    
    

    let sql = 'select * from products where s_no=?';

    c.query(sql,[s_no],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

app.put('/Update_orderdata/:s_no',(request,response)=>{
    let {s_no} =request.params;
    let {laptop,phone,accessories}=request.body;
    let sql='update products set laptop=?,phone=?,accessories=? where s_no=?';
    c.query(sql,[laptop,phone,accessories,s_no],(error,result)=>{
        if(error)
        {
            let s={"status":"error"}
                   response.send(s)
        }
        else{
                    let s={"status":"success"}
                    response.send(s)
                  }
    })
})

    

   
app.listen(3000, ()=>{console.log('Port number running in 3000')});