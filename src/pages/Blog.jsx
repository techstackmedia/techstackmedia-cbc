import { useEffect } from 'react';
import BlogNews from '../components/BlogNews/BlogNews';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog | CBC';
  });
  return (
    <>
      <header>
        <Navbar />
        <Hero title="Our Blog" />
      </header>
      <BlogNews />
      <Footer />
    </>
  );
};

export default Blog;
