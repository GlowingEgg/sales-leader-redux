export const conversations = [
  {
    sessionId : 0,
    title : "Andy",
    timeSinceLastMessage : "5m",
    messageHistory : [
      {agentSent : true, message : "Hey!", time : ""},
      {agentSent : true, message : "How are you doing today?", time : ""},
      {agentSent : true, message : "So what products do you sell on your store?", time : ""},
      {agentSent : false, message : "Women's clothing and jewelery.", time : ""},
      {agentSent : true, message : "Awesome, we've seen a ton of success with similar businesses. You're in the right place.", time : ""},
      {agentSent : true, message : "Is your store on shopify?", time : ""},
      {agentSent : false, message : "Yes.", time : ""}
    ]
  },
  {
    sessionId : 1,
    title : "Sally",
    timeSinceLastMessage : "5m",
    messageHistory : [
      {agentSent : true, message : "Thank you for contacting us today. My name is Brexton. How can I be of service?", time : ""},
      {agentSent : false, message : "I'm looking to get my store online, but I'm having some trouble.", time : ""}
    ]
  },
  {
    sessionId : 2,
    title : "Brexton",
    timeSinceLastMessage : "5m",
    messageHistory : [
      {agentSent : true, message : "Thank you for contacting us today. My name is Brexton. How can I be of service?", time : ""},
      {agentSent : false, message : "Hey, Brexton. Can you just give me an overview of the services you provide?", time : ""}
    ]
  },
  {
    sessionId : 3,
    title : "Brian",
    timeSinceLastMessage : "5m",
    messageHistory : [
      {agentSent : true, message : "Thank you for contacting us today. My name is Brexton. How can I be of service?", time : ""}
    ]
  }
]

export const suggestions = {
  0: [
      {
        suggestion: "Perfect! Would you like to see what your own mobile app would look like?",
        confidence: ".98"
      },
      {
        suggestion: "Great. Let’s build you an app.",
        confidence: ".75"
      },
      {
        suggestion: "Awesome. All of our plans start with a free trial. Let’s explore the Growth plan and see if it would supercharge your business",
        confidence: ".6"
      }
     ],
  1: [
      {
        suggestion: "Hold on. Calm down.",
        confidence: ".90"
      },
      {
        suggestion: "I will help you through this and we will each come out the other side stronger women.",
        confidence: ".77"
      },
      {
        suggestion: "I have just the thing ( ͡° ͜ʖ ͡°)",
        confidence: ".6"
      }
     ],
  2: [
      {
        suggestion: "Hold on. Calm down.",
        confidence: ".98"
      },
      {
        suggestion: "I will help you through this and we will each come out the other side stronger women.",
        confidence: ".69"
      },
      {
        suggestion: "I have just the thing ( ͡° ͜ʖ ͡°)",
        confidence: ".55"
      }
     ],
  3: [
      {
        suggestion: "Hold on. Calm down.",
        confidence: ".98"
      },
      {
        suggestion: "I will help you through this and we will each come out the other side stronger women.",
        confidence: ".75"
      },
      {
        suggestion: "I have just the thing ( ͡° ͜ʖ ͡°)",
        confidence: ".4"
      }
     ]
}

export const selectedConversation = 0;

export const agentInfo = {
  name: "Brexton",
  sales: 34,
  conversionRate: 55,
  online: true
}

export const leaderboard = [
  {
    name : "Brexton Pham",
    rank : 1,
    online : true,
    sales : 34,
    conversionRate : 55
  },
  {
    name : "Andrew Ferrarone",
    rank : 2,
    online : true,
    sales : 34,
    conversionRate : 55
  },
  {
    name : "Brian Cox",
    rank : 3,
    online : true,
    sales : 34,
    conversionRate : 55
  },
  {
    name : "Conner Hinman",
    rank : 4,
    online : true,
    sales : 34,
    conversionRate : 55
  },
  {
    name : "Dave Longstreth",
    rank : 5,
    online : true,
    sales : 34,
    conversionRate : 55
  }
]

export const agentIsOnline = true;
