const axios = require('axios');

const summarizeJournal = async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'No content provided' });
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: "mistralai/mistral-7b-instruct",  // You can change the model
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that summarizes journal entries."
          },
          {
            role: "user",
            content: `Summarize this journal entry:\n\n${content}`
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const summary = response.data.choices[0].message.content;
    res.json({ summary });
  } catch (error) {
    console.error("OpenRouter Error:", error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to summarize journal' });
  }
};

module.exports = { summarizeJournal };
