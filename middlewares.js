/**
 * 전역적으로 사용할 수 있는 변수를 추가하는 방벙이다.
 * 모든 템플릿, 뷰, 모든 곳에서 사용할 수 있다.
 */
import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
