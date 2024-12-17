const nodemailer=require("nodemailer")
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'choibnyanajet@gmail.com',
      pass: 'qfyu ekcf qsvd lbqm'
    }
  });
  
  var mailOptions = {
    from: 'choibnyanajet@gmail.com',
    to: 'sahraouimariem234@gmail.com',
    subject: 'greeting',
    text: 'waaa sahbi'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });