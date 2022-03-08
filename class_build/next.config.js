/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Slash를 기준으로 폴더안에 파일을 만들어줘!
  swcMinify: false
}

module.exports = nextConfig
