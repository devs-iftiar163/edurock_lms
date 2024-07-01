import { useState } from "react";
import { Link } from "react-router-dom";

const CourseListings = () => {
  const [input, setInput] = useState(50);
  const [increaseMessage, setIncreaseMessage] = useState(50);
  const [decreaseMessage, setDecreaseMessage] = useState(5000);

  const setRangevalue = (e) => {
    const currentValue = parseInt(e.target.value, 10);

    if (currentValue > input) {
      setIncreaseMessage(`Increased Value: ${currentValue}`);
      setDecreaseValue(decreaseValue);
    } else if (currentValue < previousValue) {
      setDecreaseMessage(`Decreased Value: ${currentValue}`);
      setIncreaseValue(increaseValue);
    }

    input(currentValue);
    setInput(currentValue);
  };

  return (
    <>
      {/* Course Listing Section */}

      <section className="course-listings">
        <div className="container">
          {/* Search Reasult And Sorting */}
          <div className="row">
            <div className="col-lg-12">
              <div className="search-main-box">
                <div className="search-count">
                  <p>Showing 1–12 of 54 Results</p>
                </div>
                {/* Sorting Box */}
                <div className="search-style">
                  {/* Box Icons */}
                  <div className="list-style-icon">
                    <Link>
                      <i class="fa-solid fa-table"></i>
                    </Link>
                    <Link>
                      <i class="fa-solid fa-bars"></i>
                    </Link>
                  </div>
                  {/* Sorting Box */}
                  <div className="sorting-box">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Sort By New</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* listing Grids */}
          <div className="row mt-5">
            {/* Left Filter Tabs */}
            <div className="col-lg-3">
              <div className="filter-wrap">
                {/* Search bar */}
                <div className="search-bar">
                  <h4>Search here</h4>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Course"
                    />
                  </div>
                </div>

                {/* Category Bar */}
                <div className="category-wrapper mt-3">
                  <h4>Category</h4>
                  <div className="category-list">
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Mobile Handset</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Americano Dish</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Fresh Vegitable</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Fruits</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Raxila Dish nonyte</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Course Tag */}
                <div className="course-tag-wrapper mt-3">
                  <h4>Tags</h4>
                  <div className="tag-list">
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Mechanic</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>English</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Computer Science</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Data & Tech</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>UI/UX Design</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Price Range */}
                <div className="price-range mt-3">
                  <h4>Tags</h4>
                  <div className="range-filter">
                    <input
                      type="range"
                      className="range-value"
                      id="rangeInput"
                      min="1"
                      max="5000"
                      value={input.value}
                      onChange={setRangevalue}
                    />
                  </div>
                  <div className="value-name">
                    <h4 id="decrease">${increaseMessage}</h4>
                    <h4 id="increase">${decreaseMessage}</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Grid Tab */}
            <div className="col-lg-9"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseListings;
