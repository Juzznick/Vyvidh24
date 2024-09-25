import React from "react";
import "./gallery.css";

const Gallery = () => {
    const images = [
        "img/gallery/img1.png",
        "img/gallery/img2.png",
        "img/gallery/img3.png",
        "img/gallery/img4.png",
        "img/gallery/img7.png",
        "img/gallery/img6.png",
        "img/gallery/img5.png",
        "img/gallery/img8.png",
        "img/gallery/img9.png",
        "img/gallery/img10.png",
        "img/gallery/img11.png",
        "img/gallery/img12.png",
        "img/gallery/img13.png",
        "img/gallery/img14.png",
        "img/gallery/img15.png",
        "img/gallery/img16.png"
        
    ];
    return (
        
        <div className="gallery-main" id='gallery'>
            <h1>Gallery</h1>
            <div className="gallery-container">
                {images.map((img, index) => (
                    <div key={index} className="gallery-item">
                        <img src={img} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Gallery;
