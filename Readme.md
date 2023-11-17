Day 1: 
  Setting the Repo Professionally.
  Connecting the vsCode with GitHub.
  Learnt to push code from vscode.

Day 2:
  Learnt Data Modelling.
  Learnt basics of mongoose and how to use it to create Data Models.
  Basic Data Models of To-do list and E-Commerce Webiste.

Day 3:
  Connecting Database to code.
  Custom API Response and Error Handling.
  Generally app.use is while using middleware
  app.use(express.json({limit: "16kb"})) is used to limit incoming json.
  app.use(express.urlencoded({extended: true})) is used to decode the url data.
  app.use(cookieParser()) is used to access the cookie from user's browser and set secure cookies.
  Middleware 👇
 ![image](https://github.com/RedSkull5143/backend/assets/94903856/e8761bd9-4491-4c68-ae30-91df2ee23841)

Day 4:
  Made models of user and video.
  mongoose-aggregate-paginate-v2
  Bcrypt: A library to help you hash passwords.
  We cant directly encrypt. We need hooks from mongoose. The Pre Middleware is used.
  **Password Check**
  userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password);
  } 
