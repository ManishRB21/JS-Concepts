function getUserInfo(userId, callback) {
    setTimeout(() => {
      const users = [
        { id: 1, name: 'manish', email: 'test@gmail.com' },
        { id: 2, name: 'behera', email: 'trial@gmail.com' },
        { id: 3, name: 'ranjan', email: 'abc@gmail.com' }
      ];
      
      const user = users.find(user => user.id === userId);
      
      if (user) {
        callback(null, user);
      } else {
        callback(new Error('User not found'));
      }
    }, 2000);
  }
  
  function sendEmail(to, subject, message, callback) {
    setTimeout(() => {
      console.log(`Sending email to ${to} with subject "${subject}" and message "${message}"`);
      callback();
    }, 1000);
  }
  
  getUserInfo(1, (error, user) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Sending email to ${user.email}`);
      sendEmail(user.email, 'Welcome to our website', 'Thank you for signing up!', (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Email sent successfully');
        }
      });
    }
  });