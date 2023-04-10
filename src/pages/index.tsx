import { type NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";
import { CallToAction } from "../components/landing/CallToAction";
import { Faqs } from "../components/landing/Faqs";
import { Hero } from "../components/landing/Hero";
import { Pricing } from "../components/landing/Pricing";
import { PrimaryFeatures } from "../components/landing/PrimaryFeatures";
import { SecondaryFeatures } from "../components/landing/SecondaryFeatures";
import { Testimonials } from "../components/landing/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Portal</title>
        <meta
          name="description"
          content="We help you focus on your construction projects by taking care of mundane tasks like files processing, keeping track of your budget costs and more"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between bg-[#2e026d] p-4">
        <nav className="flex gap-6">
          <a href="#" className="group font-navigation">
            <button className="rounded-[14px] py-[10px] px-[20px] group-hover:border-white group-hover:bg-white group-hover:bg-opacity-20 group-hover:shadow-md">
              <p className="text-sm font-bold text-white opacity-70 group-hover:opacity-100">
                Products
              </p>
            </button>
          </a>
          <a href="#" className="group font-navigation">
            <button className="rounded-[14px] py-[10px] px-[20px] group-hover:border-white group-hover:bg-white group-hover:bg-opacity-20 group-hover:shadow-md">
              <p className="text-sm font-bold text-white opacity-70 group-hover:opacity-100">
                Solutions
              </p>
            </button>
          </a>
          <a href="#" className="group font-navigation">
            <button className="rounded-[14px] py-[10px] px-[20px] group-hover:border-white group-hover:bg-white group-hover:bg-opacity-20 group-hover:shadow-md">
              <p className="text-sm font-bold text-white opacity-70 group-hover:opacity-100">
                About Us
              </p>
            </button>
          </a>
          <a href="#" className="group font-navigation">
            <button className="rounded-[14px] py-[10px] px-[20px] group-hover:border-white group-hover:bg-white group-hover:bg-opacity-20 group-hover:shadow-md">
              <p className="text-sm font-bold text-white opacity-70 group-hover:opacity-100">
                Pricing
              </p>
            </button>
          </a>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="mx-[100px] mt-20 flex justify-between gap-10">
          <div className="group relative max-w-[360px] flex-1">
            <div className="absolute inset-0 z-0 h-[426px] w-full origin-top-left -rotate-[10deg] transform rounded-md rounded-b-[60px] rounded-r-[60px] bg-gradient-to-br from-[#6CCFEE]/50 to-[#4C7FE4]/50 p-4 transition duration-[500ms] group-hover:skew-x-[5deg] group-hover:-skew-y-[5deg] group-hover:scale-x-[0.8]"></div>
            <div className="z-10 h-[426px] min-w-[240px] rounded-md rounded-b-[60px] rounded-r-[60px] bg-[#1F1F47] bg-opacity-60 bg-clip-padding py-[50px] px-[20px] backdrop-blur-[40px] backdrop-filter">
              <p className="text-center font-navigation text-sm font-semibold text-white text-opacity-70">
                BASIC
              </p>
              <h1 className="text-center font-navigation text-[60px] text-white">
                Free
              </h1>
              <p className="text-center font-navigation text-sm font-semibold text-white text-opacity-70">
                Trial
              </p>
              <div className="mx-auto mt-[23px] mb-0 grid w-fit gap-y-2">
                <div>
                  <p className="text-sm text-white text-opacity-70">
                    <span className="font-bold">Free</span> Courses
                  </p>
                </div>
                <div>
                  <p className="text-sm text-white text-opacity-70">
                    <span className="font-bold">5 Premium</span> Videos
                  </p>
                </div>
                <div>
                  <p className="text-sm text-white text-opacity-70">
                    <span className="font-bold">Notify me</span>, Favourite
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative max-w-[360px] flex-1">
            <div className="absolute inset-0 z-0 h-[519px] w-full origin-bottom-left skew-y-[10deg] transform rounded-md rounded-t-[60px] rounded-r-[60px] bg-gradient-to-br from-[#2FB8FF] to-[#9EECD9] p-4 transition duration-[500ms] group-hover:-skew-x-[5deg] group-hover:skew-y-[15deg] group-hover:scale-x-[0.8]"></div>
            <div className="z-10 h-[519px] min-w-[240px] rounded-md rounded-t-[60px] rounded-r-[60px] bg-[#1F1F47] bg-opacity-60 bg-clip-padding py-[50px] px-[20px] backdrop-blur-[40px] backdrop-filter">
              <p className="text-center font-navigation text-sm font-semibold text-white text-opacity-70">
                PRO
              </p>
            </div>
          </div>
          <div className="group relative max-w-[360px] flex-1">
            <div className="absolute inset-0 z-0 h-[426px] w-full origin-top-right rotate-[10deg] transform rounded-md rounded-b-[60px] rounded-l-[60px] bg-gradient-to-br from-[#73B8F9] to-[#CBD8F1] p-4 transition duration-[500ms] group-hover:-skew-x-[5deg] group-hover:skew-y-[5deg] group-hover:scale-x-[0.8]"></div>
            <div className="z-10 h-[426px] min-w-[240px] rounded-md rounded-b-[60px] rounded-l-[60px] bg-[#1F1F47] bg-opacity-60 bg-clip-padding py-[50px] px-[20px] backdrop-blur-[40px] backdrop-filter"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
