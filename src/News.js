import axios from "axios";
import React from "react";
import { useState, useEffect } from 'react';


function News() {
    const [newsData, setNewsData] = useState([])
    const fetchNewsApi = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6b53081cc0054b689eb986e842dc23a3")
            .then((data) => {
                console.log("world")
                setNewsData(data.data.articles)
            })
            .catch((data) => {
                console.log(data)
            });
    };
    useEffect(() => {
        fetchNewsApi();
    }, []);
    return (
        <>
            {
                console.log(newsData, "abhishek")
            }
            <div className="container">
                <div className="row ">
                    {newsData?.map((val, index) => {
                        return (
                        //    <h1>{val.author}</h1>
                       <div className="col-md-4">
                           <div className="card my-2  card_box" style={{ width: "18rems" }}>
                               <img className="card-img-top card_img" src={val.urlToImage} alt="Card image cap" />
                               <div className="card-body">
                                   <h5 className="card-title">{val.title}</h5>
                                   <p className="card-text text-truncate">{val.description}</p>
                                   <a href={val.url} className="btn btn-primary">See details</a>
                               </div>
                           </div>
                       </div>
                        );
                    })}
                  
                </div>
            </div>
        </>
    );
}
export default News;