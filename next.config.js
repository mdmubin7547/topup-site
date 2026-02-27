/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // প্রোডাকশনে console.log সরিয়ে দাও (ক্লিনার কোড)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ইমেজ অপ্টিমাইজেশনের জন্য আধুনিক ফরম্যাট সাপোর্ট (ডিফল্ট আছেই, তবে উল্লেখ করা ভালো)
  images: {
    formats: ['image/avif', 'image/webp'],
    // যদি বাইরের ইমেজ ব্যবহার করো, তাহলে ডোমেইন যোগ করো:
    // domains: ['example.com'],
  },

  // X-Powered-By হেডার সরানো (সিকিউরিটি)
  poweredByHeader: false,
};

module.exports = nextConfig;
