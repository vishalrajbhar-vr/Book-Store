import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Aboutbook from "../components/Aboutbook";
import HomeSelector from "./HomeSelector";
import ProductShowcase from "./ProductShowcase";
import CategoryShowcase from "./CategoryShowcase";
import MultipalOption from "./MultipalOption";
import LastPage from "./LastPage";
import HeroSection from "./HeroSection";

function HomePage() {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=500",
    },
    {
      id: 4,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500",
    },
    {
      id: 5,
      title: "Deep Work",
      author: "Cal Newport",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500",
    },
    {
      id: 6,
      title: "Ikigai",
      author: "Hector Garcia",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500",
    },
    {
      id: 7,
      title: "Zero to One",
      author: "Peter Thiel",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500",
    },
    {
      id: 8,
      title: "Do Epic Shit",
      author: "Ankur Warikoo",
      image:
        "https://images.unsplash.com/photo-1496104679561-38b0d7f4f29f?w=500",
    },
  ];

  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(books.length / cardsPerSlide);

  const [, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 2500);

    return () => clearInterval(slider);
  }, [totalSlides]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <HomeSelector />
      <ProductShowcase />
      <CategoryShowcase />
      <MultipalOption />
      <LastPage />
      <Footer />
    </>
  )
}

export default HomePage