import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import saudiMap from "../../images/SaudiMap.png";
import newsLogo from "../../images/newsLogo.png";
import NewsByCategory from "../NewsByCategory/index";
import { AiOutlineUnorderedList } from "react-icons/ai";
import "./style.css";

const BASE_URL = "https://62bb465a573ca8f83296a3bf.mockapi.io/api/v1/blog";
const Home = () => {
  const [news, setNews] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    const blog = await axios.get(`${BASE_URL}`);
    setNews(blog.data && blog.data.splice(0.3));
  };

  const goToDetails = (id) => {
    navigate(`/Details/${id}`);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="saudiMap-News">
        <div className="Banner">
          <img
            src={saudiMap}
            alt="Saudi Map"
            title="Saudi Map"
            className="SadiMapImage"
          />
        </div>

        <div className="News-Text">
          <img src={newsLogo} alt="Logo" className="newsLogo" />
          <div className="text-Part">
            <h1 className="news Text">News</h1>
            <b>
              <p className="bannerPragraph Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in .
              </p>
            </b>
          </div>
        </div>
      </div>

      {/******* Last news Div *******/}
      <div className="last-News-Div">
        <div className="divContant">
          <div className="News-Button">
            <div className="LastNews-Date">
              <h3 id="LastNews">Last News</h3>
              <h6> JUNE 19 , 2022</h6>
            </div>

            <div>
              <button className="list-View-Button Buttons Text">
                <AiOutlineUnorderedList />
                List View
              </button>
              <button className="grid-View-Button Buttons">Grid View</button>
            </div>
          </div>

          {news ? (
            <>
              <Slider {...settings}>
                {news.map((element) => {
                  return (
                    <div>
                      <img
                        alt="images"
                        src={element.image}
                        className="image"
                        onClick={() => goToDetails(element.id)}
                      />
                    </div>
                  );
                })}
              </Slider>
            </>
          ) : (
            "loading..."
          )}
        </div>
      </div>
      <NewsByCategory />
    </div>
  );
};

export default Home;
