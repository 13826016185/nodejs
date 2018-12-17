const express = require('express');

const mysql = require('mysql');
const _sql = require('./sql');


let app = express();


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

// 静态资源服务器
// 中间件：express.static
app.use(express.static('../'));

//创建连接池
// var pool  = mysql.createPool({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     port: 3306,
//     database: 'edusys',
//     multipleStatements: true
// });

// 创建express应用



// 路由
app.get('/login',async (req,res)=>{


    // console.log(req.params.username)

    var  name=req.query.username;
    var pwd=req.query.password;


   console.log(name);
     // let {username,password} = req.body;
    // 编写mysql语句
    let sql = `select * from user_inf where name='${name}' and password='${pwd}'`;


    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})


// 用户信息表：


app.get('/username',async (req,res)=>{



    // 编写mysql语句
    let sql = `select * from user_inf `;


    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})


app.get('/usernamedel',async (req,res)=>{


    // console.log(req.params.username)

    var id=req.query.id;
   


   console.log(id);
     // let {username,password} = req.body;
    // 编写mysql语句
    let sql = `DELETE FROM user_inf where id = ${id} `;

    console.log(sql);
    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})


app.get('/usernamec',async (req,res)=>{


    // console.log(req.params.username)

    var id=req.query.id;
     var name=req.query.name;
      var password=req.query.password;
       var age=req.query.age;
   


   console.log(name);
     // let {username,password} = req.body;
    // 编写mysql语句
    let sql = `UPDATE user_inf SET name='${name}',password='${password}',age='${age} 'WHERE id = ${id} `;

    console.log(sql);
    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})

// 这个是购物车的



app.get('/gouwuche',async (req,res)=>{



    // 编写mysql语句
    let sql = `select * from gouwuche `;


    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})


app.get('/gouwuchedel',async (req,res)=>{


    // console.log(req.params.username)

    var id=req.query.id;
   


   console.log(id);
     // let {username,password} = req.body;
    // 编写mysql语句
    let sql = `DELETE FROM gouwuche where id = ${id} `;

    console.log(sql);
    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})


app.get('/gouwuchec',async (req,res)=>{


    // console.log(req.params.username)

    var id=req.query.id;
     var title=req.query.title;
      var sale=req.query.sale;
       var nums=req.query.nums;
   


   console.log(title);
     // let {username,password} = req.body;
    // 编写mysql语句
    let sql = `UPDATE gouwuche SET title='${title}',sale='${sale}',nums='${nums}' WHERE id = ${id} `;

    console.log(sql);
    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})





// 这边是商品列表：

app.get('/goodss',async (req,res)=>{


      var page=req.query.page;
     var qty=req.query.qty;

     var index=(page-1)*qty;

    // 编写mysql语句
    let sql = `select * from good limit ${index},${qty} `;


    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})


app.get('/goods',async (req,res)=>{

    

  let sql = `select * from good  `;
    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})



app.get('/search',async (req,res)=>{

    var gname=req.query.gname;
   

    
    let sql = `select * from good WHERE good.gname like '%${gname}%' `;
   


    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})


app.get('/jiangxu',async (req,res)=>{

   
    let sql = `select * from good order by sale desc `;
   


    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})


app.get('/shengxu',async (req,res)=>{

   
    let sql = `select * from good order by sale`;
   


    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})



// goods的改，删，

app.get('/goodsdel',async (req,res)=>{


    // console.log(req.params.username)

    var id=req.query.id;
   


   console.log(id);
     // let {username,password} = req.body;
    // 编写mysql语句
    let sql = `DELETE FROM good where id = ${id} `;

    console.log(sql);
    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})



app.get('/goodsc',async (req,res)=>{


    // console.log(req.params.username)

    var id=req.query.id;
     var gname=req.query.gname;
      var price=req.query.price;
       var sale=req.query.sale;
       var num=req.query.num;
   


   console.log(gname);
     // let {username,password} = req.body;
    // 编写mysql语句
    let sql = `UPDATE good SET gname='${gname}',price='${price}',num='${num}',sale='${sale}' WHERE id = ${id} `;

    console.log(sql);
    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})



// 用户注册


app.get('/zhuce',async (req,res)=>{

    var name=req.query.name;
    var password=req.query.password;
    var age=req.query.age;
   

    
    let sql = `INSERT INTO user_inf SET name = ${name}, password = ${password}, age = ${age} `;
   


    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})


// 商品添加


app.get('/zhucegood',async (req,res)=>{

    var gname=req.query.gname;
    var price=req.query.price;
    var sale=req.query.sale;
    var num=req.query.num;
    var imgurl=req.query.imgurl;
   

    
    let sql = `INSERT INTO good SET gname = '${gname}', price = ${price}, sale = ${sale}, num = ${num}, imgurl = ${imgurl} `;
   


    // 利用async, await实现数据获取
    let data = await _sql.query(sql); 


            console.log(sql);

            res.send(data);

})




app.listen(3008,()=>{
    console.log('server is running on http://localhost:3008');
})

