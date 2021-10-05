import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
    const instagram = <FontAwesomeIcon icon={faInstagramSquare} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const youtube = <FontAwesomeIcon icon={faYoutubeSquare} />
    return (
        <div >
            {/* <p className="text-center">All rights reserved © <a href="https://p-shafin.netlify.app" className="text-decoration-none text-black">Shoyayeb</a> </p> */}
            <footer className="text-center text-lg-start bg-warning">
                <div className="container d-flex justify-content-center py-5">
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2 bg-black bg-opacity-50" >
                        {facebook}
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2 bg-black bg-opacity-50">
                        {youtube}
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2 bg-black bg-opacity-50" >
                        {instagram}
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2 bg-black bg-opacity-50">
                        {twitter}
                    </button>
                </div>

                <div className="text-center text-white p-3 bg-black bg-opacity-10">
                    © 2021 Copyright:
                    <a className="text-white text-decoration-none" href="https://p-shafin.netlify.app">Shoyayeb</a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;