//       _           _
//   ___| |__   __ _| |_
//  / __| '_ \ / _` | __|
// | (__| | | | (_| | |_
//  \___|_| |_|\__,_|\__|
//

const Request = require('request-promise');
const API_SH_CHAT = 'http://dev-api.salesleader.ai/chat_suggestions'; // TODO ENV VARS
const debug = require('debug')('api:controller:chat');

function chatSuggestions(request, response) {

	// fudge some params for now
	let params = {
		session_id: 'h21490x3rmx3po',
		user_spoke_last: false,
		timestamp: Date.now(),
		messages: []
	}

  debug(`Requesting chat suggestions from ${API_SH_CHAT}...`);

  Request({
    method: 'GET',
    uri: API_SH_CHAT,
    json: true,
		body: params
  })
  .then(function(result) {
    debug('successful response from API');
    response.json(result);
  })
  .catch(function(error) {
    debug(error);
    response.status(500).json({
      error: {
        code: 500,
        status: 'Failed to reach API'
      }
    })
  });
}

function dummyChatSuggestions(request, response) {
	response.json({
    foo: 'barBAZQUUX'
  });
}

exports.chatSuggestions = chatSuggestions;
exports.dummyChatSuggestions = dummyChatSuggestions;
