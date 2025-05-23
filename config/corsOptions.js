import { allowedOrigin } from './allowedOrigin.js';
export const  Credentials = {
  credentials: true,
  origin: (origin, callback) => {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  } ,
  optionsSuccessStatus: 200
}