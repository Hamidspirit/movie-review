import exprerss from "express"
import cors from "cors"
import reviews from "./api/review.route.js"

const app = exprerss()
app.use(cors())
app.use(exprerss.json())
// Routes
app.use(".api/v1/reviews", reviews)
// Handling 404 Error
app.use("*",(req, res) =>
res.status(404).json({error:"not found"})) 

export default app