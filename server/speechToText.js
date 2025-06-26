const speech = require('@google-cloud/speech');
const fs = require('fs');

const client = new speech.SpeechClient();

async function transcribeAudio(filePath) {
  const audio = {
    content: fs.readFileSync(filePath).toString('base64'),
  };
  const config = {
    encoding: 'LINEAR16', // Change if your audio is not LINEAR16
    sampleRateHertz: 16000, // Change if your audio uses a different sample rate
    languageCode: 'en-US',
  };
  const request = { audio, config };
  const [response] = await client.recognize(request);
  return response.results.map(result => result.alternatives[0].transcript).join('\n');
}

module.exports = { transcribeAudio };
