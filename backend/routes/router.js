
import express, { Router } from "express";
import z from 'zod'
import { Todos, User } from "../db.js";
import jwt from 'jsonwebtoken'
import authmiddleware from "../middelware.js";

const router = express.Router()


const userSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
}) 

router.post("/signup",async (req,res)=>{
    const userInfo = req.body;
    const { success } = userSchema.safeParse(userInfo);
    if(!success){
        res.status(501).json({
            msg:"wrong inputs"
        })
    }
    try{
        const alreadyUser = await User.findOne({
            username: userInfo.username
        })

        if(alreadyUser){
            res.status(404).json({
                msg:"user already exist"
            })
        }
        const newUser = await User.create(userInfo)
        const userId = newUser._id;

        const token = jwt.sign({userId},process.env.JWT_SECRETE)
        
        res.status(200).json({
            msg: "User create succesfully",
            token
        })
    }
    catch(e){
        res.status(501).json({
            msg:"user already exist"
        })
    }
})

const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

router.post("/signin", async(req,res)=>{
    const userinfo = req.body;
    console.log(userinfo)
    const { success } = signinSchema.safeParse(userinfo);
    console.log(success)
    if(!success){
        res.status(404).json({
            msg:"wrong inputs password must be more than 6 character"
        })
    }

    const user = await User.findOne({
        email: userinfo.email,
        password:userinfo.password
    })

    console.log(user)
    if(!user){
        res.status(404).json({
            msg:"user not found"
        })
    }
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRETE)
    res.status(200).json({
        msg:'sign in succesfully',
        token
    })
})

const todoSchema = z.string()

router.post('/todo', authmiddleware, async (req, res) => {
  const todo = req.body.todo;
  const userID = req.userID;

  const { success } = todoSchema.safeParse(todo);

  if (!success) {
    return res.status(400).json({
      msg: "wrong input for todo"
    });
  }

  try {
    const newtodo = await Todos.create({
      userId: userID,
      todo
    });

    return res.status(201).json({
      msg: "todo created successfully",
      todo: newtodo
    });
  } 
  catch (e) {
    console.error(e);
    return res.status(500).json({
      msg: "Internal server error"
    });
  }
});

router.get('/todo',authmiddleware,async (req,res)=>{
    const userID = req.userID 
    const todos = await Todos.find({
        userId: userID
    })

    res.status(200).json({
        todos
    })
})

router.put('/todo', authmiddleware, async(req,res)=>{
    const todoId = req.body.id;
    
    try{
        const todo = await Todos.findById(todoId)
        if(todo.userId == req.userID){
            const updateTodo = await Todos.updateOne({
                _id: todoId
            },{
                completed: !todo.completed
            })
            res.status(200).json({
                msg:"todo updated succesfully"
            })
        }
        else{
            res.send("todo not found")
        }
    }
    catch(e){
        res.send("todo not found")
    }
})


router.delete("/todo/delete", authmiddleware, async (req,res)=>{
    const deleteTodo = await Todos.deleteMany({
        userId: req.userID
    })
    res.status(200).json({
        msg:"delete todos"
    })
})

router.delete("/todo", authmiddleware, async (req,res)=>{
    const deleteTodo = await Todos.deleteOne({
        _id: req.body.id
    })
    
    res.status(200).json({
        msg:"delete todo"
    })
})

export default router

