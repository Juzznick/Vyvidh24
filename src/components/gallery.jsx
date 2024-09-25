import React from "react";
import "./gallery.css";

const Gallery = () => {
    const images = [
        "public/img/gallery/img1.png",
        "public/img/gallery/img2.png",
        "public/img/gallery/img3.png",
        "public/img/gallery/img4.png",
        "public/img/gallery/img7.png",
        "public/img/gallery/img6.png",
        "public/img/gallery/img5.png",
        "public/img/gallery/img8.png",
        "public/img/gallery/img9.png",
        "public/img/gallery/img10.png",
        "public/img/gallery/img11.png",
        "public/img/gallery/img12.png",
        "public/img/gallery/img13.png",
        "public/img/gallery/img14.png",
        "public/img/gallery/img15.png",
        "public/img/gallery/img16.png"
        
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
