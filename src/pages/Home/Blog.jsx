import { Link } from "react-router-dom";
import blogImage from "../../../public/blog_4.png";

const Blog = () => {
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-heading">
                <h4>News & Blogs</h4>
                <h2>Leatest News & Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="blog-card">
                <div className="feature-image">
                  <img src={blogImage} alt="" />
                </div>
                <div className="blog-content">
                  <Link>
                    <h2>
                      It is a long established fact that a reader will be
                      Standard Part
                    </h2>
                  </Link>
                  <p>
                    A wonderful serenity has taken possssion of my entire souing
                    like these sweet morning spring whch enjoy with my whole
                    heart I am alone,
                  </p>
                  <button className="read-more">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-card">
                <div className="feature-image">
                  <img src={blogImage} alt="" />
                </div>
                <div className="blog-content">
                  <Link>
                    <h2>
                      It is a long established fact that a reader will be
                      Standard Part
                    </h2>
                  </Link>
                  <p>
                    A wonderful serenity has taken possssion of my entire souing
                    like these sweet morning spring whch enjoy with my whole
                    heart I am alone,
                  </p>
                  <button className="read-more">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-card">
                <div className="feature-image">
                  <img src={blogImage} alt="" />
                </div>
                <div className="blog-content">
                  <Link>
                    <h2>
                      It is a long established fact that a reader will be
                      Standard Part
                    </h2>
                  </Link>
                  <p>
                    A wonderful serenity has taken possssion of my entire souing
                    like these sweet morning spring whch enjoy with my whole
                    heart I am alone,
                  </p>
                  <button className="read-more">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
