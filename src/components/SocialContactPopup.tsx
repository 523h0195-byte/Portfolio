import React from 'react';

const BASE_URL = import.meta.env.BASE_URL;

const SocialContactPopup = () => {
  return (
    <a
      href="https://zalo.me/0559149285"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-white rounded-full shadow-lg shadow-[#0068FF]/30 hover:shadow-[#0068FF]/50 transition-all hover:scale-110 flex items-center justify-center overflow-hidden border-2 border-white"
      aria-label="Contact via Zalo"
      title="Chat with me on Zalo"
    >
      <img 
        src={`${BASE_URL}zalo.jpg`} 
        alt="Zalo" 
        className="w-full h-full object-cover"
      />
    </a>
  );
};

export default SocialContactPopup;