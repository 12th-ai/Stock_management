// import { db } from "../connect.js";
// import bcrypyt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const register = (req, res) => {
//     const q = "SELECT * FROM users WHERE username = ?"
//     db.query(q, [req.body.username], (err, data) => {
//         if (err) return res.status(500).json(err);
//         if (data.length) return res.status(409).json("user already exists!!");
//         const salt = bcrypyt.genSaltSync(10);
//         const hashedPassword = bcrypyt.hashSync(req.body.password, salt);

//         const q = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";
//         const values = [req.body.username, req.body.email, hashedPassword, req.body.name];
//         db.query(q, [values], (err, data) => {
//             if (err) return res.status(500).json(err)
//             return res.status(200).json("User has been created.");

//         })
//     })
// };
// export const login = (req, res) => {

//     const q = "SELECT * FROM users WHERE username = ?"

//     db.query(q, [req.body.username], (err, data) => {
//         if (err) return res.status(500).json(err);
//         if (data.length === 0) return res.status(404).json("User not found.");

//         const checkPassword = bcrypyt.compareSync(req.body.password, data[0].password);

//         if (!checkPassword) return res.status(400).json("Wrong password or username!");


//         const token = jwt.sign({ id: data[0].id }, "secretkey")

//         const { password, ...others } = data[0];

//         res.cookie("accessToken", token, {
//             httpOnly: true
//         }).status(200).json(others);


//     })


// };
// export const logout = (req, res) => {
//     res.clearCookie("accessToken", {
//         secure: true,
//         sameSite: "none"
//     }).status(200).json("User logged out succesfully.")

// };

// // controllers 


// import express from "express";
// import { login, register, logout } from "../controllers/auth.js";

// const route = express.Router();

// route.post("/login", login);
// route.post("/register", register);
// route.post("/logout", logout);

// export default route;


// // server 

// import express from "express";
// import userRoutes from "./routes/users.js";
// import authRoutes from "./routes/auth.js";
// import postRoutes from "./routes/posts.js";
// import commentRoutes from "./routes/comments.js";
// import likesRoutes from "./routes/likes.js";
// import relationshipRoutes from "./routes/relationships.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import multer from "multer";
// const port = 3001;
// const app = express();

// //Middlewares:
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Credentials', true)
//     next();
// })
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//     origin: "http://localhost:3000"

// }));
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '../client/public/upload')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + Date.now() + file.originalname)
//     }
// })

// const upload = multer({ storage: storage })
// app.post("/api/upload", upload.single("file"), (req, res) => {
//     const file = req.file;
//     res.status(200).json(file.filename);
// });
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/likes", likesRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/relationships", relationshipRoutes);
// app.listen(port, () => {

//     console.log(`Server running on port ${port}`);
// })


// // fronted 

// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );

//   const login = async (inputs) => {
//     const res = await axios.post("http://localhost:3001/api/auth/login", inputs, {
//       withCredentials: true
//     });

//     setCurrentUser(res.data);
//     console.log(res.data)
//   };

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(currentUser));
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";
// import "./login.scss";

// const Login = () => {
//   const [inputs, setInputs] = useState({

//     username: "",
//     password: "",
//   });
//   const [err, setErr] = useState(null);
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   };
//   const { login } = useContext(AuthContext);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {

//       await login(inputs);
//       navigate("/")
//     }
//     catch (err) {
//       setErr(err.response.data)
//     }
//   };

//   return (
//     <div className="login">
//       <div className="card">
//         <div className="left">
//           <h1>Hello World.</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
//             alias totam numquam ipsa exercitationem dignissimos, error nam,
//             consequatur.
//           </p>
//           <span>Don't you have an account?</span>
//           <Link to="/register">
//             <button>Register</button>
//           </Link>
//         </div>
//         <div className="right">
//           <h1>Login</h1>
//           <form>
//             <input type="text" placeholder="Username" name="username" onChange={handleChange} />

//             {err && err}
//             <input type="password" placeholder="Password" name="password" onChange={handleChange} />
//             <button onClick={handleLogin}>Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// axios 

// import axios from "axios";
// export const makeRequest = axios.create({
//     baseURL: 'http://localhost:3001/api/',
//     withCredentials: true,
// });


// <AuthContextProvider>
// <App />
// </AuthContextProvider>


