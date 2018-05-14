var env = process.env.NODE_ENV || 'development';
console.log('env ****' , env);
if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGO_DB_CONNECTION = 'mongodb://localhost:27017/dbAlMundo';
}else if(env === 'test') {
  process.env.PORT = 3000; 
  process.env.MONGO_DB_CONNECTION = 'mongodb://localhost:27017/dbAlMundoTest'; 
}