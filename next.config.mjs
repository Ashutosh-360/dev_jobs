/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MONGODB_URI: `mongodb+srv://ashutoshnaik360:test1234@devjobs.mezsqex.mongodb.net/database?retryWrites=true&w=majority&appName=devJobs`,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
