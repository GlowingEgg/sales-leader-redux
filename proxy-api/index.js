//              _
//   __ _ _ __ (_)
//  / _` | '_ \| |
// | (_| | |_) | |
//  \__,_| .__/|_|
//      | _|


const express = require('express');
const router = express.Router();
const ChatController = require('./chat_controller');

// Proxy API to everything.

// POST suggestions API
router.post('/chat_suggestions', ChatController.chatSuggestions);
// GET chat dummy data for debugging
router.get('/chat_suggestions', ChatController.chatSuggestions);

module.exports = router;
