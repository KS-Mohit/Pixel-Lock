import LightGallery from 'lightgallery/react';

// styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// plugins 
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';

const images = [
    { src: "/1.jpg", alt: "1" },
    { src: "/2.jpg", alt: "2" },
    { src: "/3.jpg", alt: "3" },
    { src: "/4.jpg", alt: "4" },
]

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate]}
                download={false}  // Disable download button in fullscreen
            >
                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img 
                                alt={image.alt} 
                                src={image.src} 
                                onContextMenu={(e) => e.preventDefault()} // Disable right-click
                                draggable="false"  // Disable dragging
                            />
                        </a>
                    )
                })}
            </LightGallery>
        </div>
    );
}
