import React, {useState} from 'react';
import './video.scss';
import './pages.scss';
import {AiFillStar} from "react-icons/ai";
import { Col, Container, Row } from 'react-bootstrap';


const VideoItem = ({video , handleVideoSelect}) => {
    document.querySelector('body').scrollTo(0,600);
    const dateString = video.snippet.publishedAt;
    const year = dateString.slice(0,4);
    const month = dateString.slice(5,7);
    const day = dateString.slice(8,10);

    return (
        <>
        <Container fluid>
    <Row className="justify-content-center video-list" style={{marginTop:'2rem'}} onClick={ () => handleVideoSelect(video)}>
          
                 <Col md={4} >  

                <img className='videoItemImage' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                </Col>
                <Col  md={8} >  

                    <div onClick={ () => handleVideoSelect(video)} className='videoItemTitle'>
                        <h4>
                            {video.snippet.title}
                        </h4>
                    </div>

                    <div >
                        <p>
                            {video.snippet.channelTitle}  |  {year}-{month}-{day}  {/*|  <AiFillStar className='voteIcon'/> 0 */}
                        </p>

                        <div >
                            <p>
                                {video.snippet.description} 
                            </p>
                        </div>
                    </div>

                    {/* YouTube Video ID */}
                    {/* <p>Video ID: {video.id.videoId}</p> */}
                
            </Col>

           
            </Row>
            </Container>
        </>
    )
};
export default VideoItem;