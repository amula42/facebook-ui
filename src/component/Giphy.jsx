import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SearchIcon from '@mui/icons-material/Search';
import "./Giphy.css";

const Giphy = () => {
    const [data, setData] = useState([]);
    const [gif, setGif] = useState("");
    useEffect(() => {
      const fetchData = async () => {
          const results = await axios("https://api.giphy.com/v1/gifs/trending", {
              params: {
                  api_key: "67BmK5Jmo0xgeclA5MpQo8ehcOIqmyUs"
              }
          });
          setData(results.data.data);
      }
      fetchData()
    }, []);

    const gifSearch = (e) => {
        setGif(e.target.value);
    }
    
    const searchGif = async (e) => {
        e.preventDefault();
        try {
            const sresults = await axios(`https://api.giphy.com/v1/gifs/search?api_key=67BmK5Jmo0xgeclA5MpQo8ehcOIqmyUs&q=${gif}`)
            setData(sresults.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    
  return (
    <div className='container_gifs'>
        <div className="modal_box">
            <div className="modal_title">
                <p>Choose a GIF</p>
            </div>
            <div className='gif_search'>
                <SearchIcon />
                <form>
                    <input
                        type='text'
                        placeholder='Search'
                        value={gif}
                        onChange={gifSearch} />
                    <button onClick={searchGif} type="submit">search</button>
                </form>
            </div>
            <div className="gif_display">
                <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                    <ImageList variant="masonry" cols={2} gap={8}>
                        {data.map((el) => (
                        <ImageListItem key={el.id}>
                            <img
                            src={el.images.fixed_height.url}
                            alt=""
                            />
                        </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </div>
        </div>
    </div>
  )
}
// const clickGif = (url) => {
//     console.log(url);
// }

export default Giphy;