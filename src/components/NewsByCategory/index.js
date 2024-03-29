import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsArrowRightShort } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
import { CgTrending } from "react-icons/cg";
import { IoIosBody } from "react-icons/io";
import "./style.css";
const BASE_URL = "https://62bb465a573ca8f83296a3bf.mockapi.io/api/v1/blog";

const NewsByCategory = () => {
  const [news, setNews] = useState([]);
  let navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/Details/${id}`);
  };
  useEffect(() => {
    getAllBlogs();
    // eslint-disable-next-line
  }, []);

  const getAllBlogs = async () => {
    const blog = await axios.get(`${BASE_URL}`);
    setNews(blog.data.splice(1,3));
  };

  return (
    <div className="container-NewsByCategory">
      <div className="NewsByCategory-Button">
        <div className="LastNews-Date">
          <h3 className="Text">News by category</h3>
        </div>

        <div>
          <button className="ViewAllNews-Button Buttons">
            <BsArrowRightShort />
            View all News
          </button>
        </div>
      </div>

      <div>
        <ul className="categories">
          <u className="Greens">
            <li className="category Text">
              <BsMap className="Greens" /> Saudia Arbia
            </li>
          </u>

          <u className="purple">
            <li className="category">
              <CgTrending className="purple" />
              Economy
            </li>
          </u>
          <u className="light-green">
            <li className="category">
              <IoIosBody className="light-green" /> Spotrs
            </li>
          </u>
        </ul>
      </div>

      {news ? (
        <div class="grid-container">
          {news.map((element) => {
            return (
              <div className="item">
                <img
                  alt="imageBlog"
                  src={element.image}
                  onClick={() => goToDetails(element.id)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default NewsByCategory;
