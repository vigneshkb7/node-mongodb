import mongoose from 'mongoose';

export default callback => {
  let db = mongoose.connect('mongodb://127.0.0.1:27017/ruralspoon');
  callback(db);
}
