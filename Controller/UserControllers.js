const user = require("../Models/usermodel");

const Signup = async (req, res) => {
    try {
        const { name, email, password, confirm } = req.body;

    const newUser = new user({
        name,
        email,
        password,
        confirm
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: "User registered successfully",
         user: savedUser
         });
    } catch (error) {
    res.status(500).json({ message: "Error creating user" ,
        error: error.message
    });
    }
    const userRouter = require("../Routers/UserRouter");
    app.use("/api/users", userRouter);