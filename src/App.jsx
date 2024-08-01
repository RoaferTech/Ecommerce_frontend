import BannerCarousel from "./components/BannerCarousel";
import CategoryCards from "./components/CategoryCards";
import CollectionsCards from "./components/CollectionsCards";
import CompanyCard from "./components/Company";
import FooterComponent from "./components/Footer";
import Navbar from "./components/Navbar";
import ServicesComponent from "./components/Services";
import TopCollection from "./components/TopCollection";
import TopProducts from "./components/TopProducts";

function App() {
  return (
    <>
      <Navbar />
      <BannerCarousel />
      <CategoryCards />
      <TopCollection />

      <div className="bg-[url('src/assets/bg.jpg')] bg-fixed w-screen bg-cover bg-no-repeat py-[30px] md:py-[190px] md:bg-[50%] bg-center overflow-hidden ">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center w-screen md:w-[500px] lg:w-[600px] bg-[#FFFFFF33] md:bg-transparent p-[25px]">
            <h2 className="text-[60px] lg:text-[90px] font-semibold lg:font-bold text-[#FF4C3B] uppercase tracking-wide">
              2023
            </h2>
            <h3 className=" text-[40px] lg:text-[55px] text-[#333] uppercase font-semibold lg:font-bold tracking-wide text-center">
              FASHION TRENDS
            </h3>
            <h4 className=" text-lg lg:text-2xl pt-2 text-[#777] font-semibold uppercase tracking-[8px]">
              SPECIAL OFFER
            </h4>
          </div>
        </div>
      </div>
      <TopProducts />
      <ServicesComponent />
      <div className="card_col max-w-[1260px] mx-auto pt-[72px] overflow-hidden">
        <div className="text-center">
          <h4 className="text-[#FF4C3B] pb-2 text-lg capitalize font-normal">
            Our Collection
          </h4>
          <h2 className="pb-1 mb-[30px] relative text-[32px] uppercase font-bold after:absolute after:left-0 after:right-0 after:bottom-0 after:mx-auto after:h-[2px] after:w-[70px] after:bg-[#FF4C3B]">
            SPECIAL PRODUCTS
          </h2>
        </div>
        <CollectionsCards />
      </div>
      <CompanyCard />
      <FooterComponent />
    </>
  );
}

export default App;
