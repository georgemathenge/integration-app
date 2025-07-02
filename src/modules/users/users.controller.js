// Example DB call in controller

const axios = require('axios');

const getAllUsers = async (req, res) => {
  try {
    // Replace this with DB logic
    res.json([{ id: 1, name: 'Users 1' }]);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
const registerUser = async (req, res) => {
  try {
   
    const { login, email, password, langKey } = req.body;

    axios({
      method: 'post',
      url: 'https://api-prd.kra.go.ke/api/register',
      data: {
        login:login,
        email:email,
        password:password,
        langKey:langKey
      }
    })
    .then(function (response) {
      res.status(201).json({
         message: 'User registered successfully',
         data: response.data,
         status: response.status
    });
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        res.status(error.response.status).json({
          message: 'Error registering user',
          error: error.response.data
        });
      } else if (error.request) {
        // The request was made but no response was received
        res.status(500).json({ message: 'No response from server', error: error.message });
      } else {
        // Something happened in setting up the request that triggered an Error
        res.status(500).json({ message: 'Error in request setup', error: error.message });
      }
    })
    .finally(function () {
      // always executed
    });

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};
const authenticate = async (req, res) => {
  try {
   
    const { username, password } = req.body;

    axios({
      method: 'post',
      url: 'https://api-test.kra.go.ke/api/authenticate',
      data: {
        username:username,
        password:password,
      }
    })
    .then(function (response) {
      res.status(201).json({
         message: 'User Authenticated successfully',
         data: response.data,
         status: response.status
    });
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        res.status(error.response.status).json({
          message: 'Error authenticating user',
          error: error.response.data
        });
      } else if (error.request) {
        // The request was made but no response was received
        res.status(500).json({ message: 'No response from server', error: error.message });
      } else {
        // Something happened in setting up the request that triggered an Error
        res.status(500).json({ message: 'Error in request setup', error: error.message });
      }
    })
    .finally(function () {
      // always executed
    });

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

module.exports = { getAllUsers, registerUser , authenticate};