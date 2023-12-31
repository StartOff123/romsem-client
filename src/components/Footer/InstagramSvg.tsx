import React from 'react'

const InstagramSvg: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width={50} height={50} id="Layer_1" viewBox="0 0 512 512">
            <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="linear-gradient" x1="8" x2="506.325" y1="504" y2="5.675">
                    <stop offset="0" stopColor="#ffcb52" />
                    <stop offset="0.318" stopColor="#ff6341" />
                    <stop offset="0.658" stopColor="#cd39a2" />
                    <stop offset="1" stopColor="#515bca" />
                </linearGradient>
                <linearGradient id="linear-gradient-3" x1="8" x2="506.325" href="#linear-gradient" y1="504" y2="5.675" />
            </defs>
            <path style={{ fill: 'url(#linear-gradient)' }} d="M314.757,147.525H197.243a49.717,49.717,0,0,0-49.718,49.718V314.757a49.718,49.718,0,0,0,49.718,49.718H314.757a49.718,49.718,0,0,0,49.717-49.718V197.243A49.717,49.717,0,0,0,314.757,147.525ZM256,324.391A68.391,68.391,0,1,1,324.391,256,68.391,68.391,0,0,1,256,324.391ZM327.242,201.58a16.271,16.271,0,1,1,16.27-16.271A16.271,16.271,0,0,1,327.242,201.58Z" />
            <path style={{ fill: 'url(#linear-gradient)' }} d="M256,211.545A44.455,44.455,0,1,0,300.455,256,44.455,44.455,0,0,0,256,211.545Z" />
            <path style={{ fill: 'url(#linear-gradient-3)' }} d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM389.333,312.5A76.836,76.836,0,0,1,312.5,389.333H199.5A76.837,76.837,0,0,1,122.666,312.5V199.5A76.836,76.836,0,0,1,199.5,122.667H312.5A76.836,76.836,0,0,1,389.333,199.5Z" />
        </svg>
    )
}

export default InstagramSvg