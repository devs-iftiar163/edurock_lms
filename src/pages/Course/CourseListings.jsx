import { Link } from "react-router-dom";

const CourseListings = () => {
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
                        <span>Artificial</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Artificial</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Artificial</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Artificial</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="checkbox-design"
                          name=""
                          id=""
                        />
                        <span>Artificial</span>
                      </li>
                    </ul>
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
