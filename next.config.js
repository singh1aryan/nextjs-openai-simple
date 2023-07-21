/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    chatGpt: 'https://api.openai.com/v1/chat/completions',
    apiKey: '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',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
