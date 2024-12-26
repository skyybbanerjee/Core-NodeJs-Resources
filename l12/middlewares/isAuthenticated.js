export const isAuthenticated = (req, res, next) =>{
  console.log(`Dummy Middleware: Request from: ${req.ip}`);
  next(); // continue to the next middleware or route handler
}