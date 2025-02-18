const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function testOpenAI() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Hello, are you there?" }],
      model: "gpt-3.5-turbo",
    });
    
    console.log('OpenAI Connection Successful:', completion.choices[0].message);
  } catch (error) {
    console.error('OpenAI Connection Error:', error.message);
  }
}

testOpenAI();