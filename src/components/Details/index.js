import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TbLetterH } from "react-icons/tb";
import newsLogo from "../../images/newsLogo.png";
import "./style.css";
const BASE_URL = "https://62bb465a573ca8f83296a3bf.mockapi.io/api/v1/blog";

const Details = () => {
  const id = useParams().id;
  const [oneBlog, setOneBlog] = useState();
  const getOneNew = async () => {
    try {
      const oneNew = await axios.get(`${BASE_URL}/${id}`);
      setOneBlog(oneNew.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOneNew();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-Details">
      {oneBlog && (
        <>
          <div className="Details-Content">
            <div className="Icons-Title Text">
              <img src={newsLogo} alt="NewsLogo" className="NewsLogo" />

              <h1 className="Details-Title Text">{oneBlog.title}</h1>
            </div>

            <div className="Text-Image">
              <h6 className="Red">
                Date of publication
                <b>
                  <span className="Text">{oneBlog.date}</span>
                </b>
              </h6>
              <img src={oneBlog.image} alt="Details" id="Details-Of-Image" />
              <p className="Description Text">{oneBlog.description}</p>
              <div className="textarea-Button">
                <textarea
                  name="comment"
                  rows="3"
                  placeholder="Add a comment ...."
                  className="texterea"
                />
                <button className="save-Button Buttons">Save</button>
              </div>{" "}
            </div>
          </div>
          <div className="Icon-Textarea">
            <div className="userIcon">
              <TbLetterH id="iconH" />
            </div>
            <div className="Text userComment">
              ut aliquip ex ea commod consequat. Duis aute irure dolor in .
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
