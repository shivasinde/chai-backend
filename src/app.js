import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json({limit : "16Kb"}))
app.use(express.urlencoded({limit:"16kb", extended : true}))
app.use(express.static("public"))
app.use(cookieParser())
export {app}
