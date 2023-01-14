import { Link, useNavigate } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../components/Slider";


const Explore = () => {

  const navigate = useNavigate()
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
        
          <button className="addListingCTABtn" onClick={() => navigate('/sign-in')}>Add your place</button>
      </header>

      <main>
        <Slider/>

        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for Rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sell"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for Sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
