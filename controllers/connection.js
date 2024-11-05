const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userData');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  const user = await User.findOne({ email });console.log(user)
  if (!user) return res.status(404).json({ msg: 'User not found' });
   if (user.password != password) return res.status(400).json({ msg: 'Invalid credentials' });
  res.json({ role: user.role });


  // const isMatch = await bcrypt.compare(password, user.password);
  // if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  // const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
  // res.send(200).json({ token, role: user.role });
};
