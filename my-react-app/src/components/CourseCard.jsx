import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CourseCard({ title = "Flora", status, image, iconSrc, showOverlay = false }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate("/plants");
    };

    return (
      <div className={`relative max-w-sm bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105`} onClick={handleCardClick}>
        {/* Image Background */}
        <div className="relative">
          <img
            loading="lazy"
            src={image}
            alt={`${title} course thumbnail`}
            className="object-cover w-full h-48"
          />
          {/* Text Overlay */}
          {showOverlay && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold tracking-wide">{title}</h1>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-200 flex items-center justify-between p-4">
          <span className="text-gray-700 text-sm font-medium">{status}</span>
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain shrink-0 mt-3 aspect-[0.79] w-[30px]"
          />
        </div>
      </div>
    );
}
