import { Link } from "react-router-dom";
import brandOne from "../../../public/brand_1.png";
import brandTwo from "../../../public/brand_2.png";
import brandThree from "../../../public/brand_3.png";
import brandFour from "../../../public/brand_4.png";
import brandFive from "../../../public/brand_6.png";

const Partners = () => {
  return (
    <>
      <section className="brand-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-image">
                <ul>
                  <li>
                    <Link>
                      <img src={brandOne} alt="Brands" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={brandTwo} alt="Brands" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={brandThree} alt="Brands" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={brandFour} alt="Brands" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={brandFive} alt="Brands" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
