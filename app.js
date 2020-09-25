//require : node_modules에서 ()안에 있는 폴더를 가져오는 것.
import express from "express";
//application에서 발새하는 모든 일들을 logging하는 미들웨어.
import morgan from "morgan";
//application을 더 안전하게 해주는 미들웨어
import helmet from "helmet";
//cookis를 전달 받아 사용할 수 있도록 만들어 준느 미들웨어(ex. 사용자 인증)
import cookieParser from "cookie-parser";
//사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어(req정보에서 form이나 json형태로 body 검사)
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

//순서 중요!!
app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
