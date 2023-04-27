import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    raspberrypi,
    nmap,
    linux,
    sql,
    sih,
    nvidia,
    flask,
    python,
    qt,
    clogo,
    cpp,
    starbucks,
    tesla,
    shopify,
    nvidiacertificate,
    trainer,
    pattent,
    winner,
    bit,
    arch,
    ethical,
    scopus,
    meta,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    
    {
      id: "work",
      title: "Work",
    },
    {
      id: "achievement",
      title: "Achievements",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Trainer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "c++",
      icon: cpp,
    },
    {
      name: "flask",
      icon: flask,
    },
    {
      name:"linux",
      icon: linux,
    },{
      name: "mysql",
      icon: sql,
    },
    {
      name: "qt",
      icon: qt,
    },
    {
      name: "nivia",
      icon: nvidia,
    },
    {
      name: "clogo",
      icon: clogo,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "nmap",
      icon: nmap,
    },
    {
      name: "raspberrypi",
      icon: raspberrypi,
    },
  ];
  
  const experiences = [
    {
      title: "UI For SIX-AXIS ROBOT",
      company_name: "OpenCV",
      icon: tesla,
      role:"Frontend Dev",
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "A automated robot used for Industrial purpose",
        "3D model UI which is used to control and monitor the Robot",
        "3D graph visualization to showcase the  movement of robot",
        "QT / QML frameworks which uses C / C++ classes effecively",
        "Movemnts of the robot, saved State of the robot can be shared accross the network using TCP"
      ],
    },
    {
      title: "Communication-Hearing-Impaired-People",
      company_name: "SIH 2022",
      role:"TeamLead, Backend Dev",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jun 2022 - Aug 2022",
      points: [
        "Assists people with hearing difficulties to communicate effectively with society by using audio input to identify direction of sound source and sends signals to vibrators for alerts",
        "Uses NVIDIA 's Jetson nano for processing the audio  and Arduino UNO for hardware setup and Runs various AI and python Algorithms for higher efficiency",
        "Includes camera for sign language recognition, phone call indication feature which has text-to-speech to assist the people with hearing difficulties",
        "Developed a Universal Platform for the Communication between deaf & dumb and a Normal one",
      ],
    },
    {
      title: "SPEECH-RECOGNITION AI MODEL FOR TRIBEL AREA",
      company_name: "Shopify",
      icon: shopify,
      role:'Backend Dev , Frontend Dev',
      iconBg: "#383E56",
      date: "Feb 2022 - March 2022",
      points: [
        "Take any language as an Input",
        "Converts the Input audio into the desired text output selected by the user",
        "To improve HCI the Backend is Connected to an UI using Tinkter",
      ],
    },
    {
      title: "VIRTUAL MOUSE",
      company_name: "OpenCV",
      icon: meta,
      role:"Backend Dev",
      iconBg: "#E6DEDD",
      date: "Dec 2021 - Jan 2022",
      points: [
        "Recognizes the finger tip of the user using OpenCV",
        "Converts the captured datapoints into Gestures using mediapipe",
        "Performing the actions of the mouse by moving the hands virtually",
        "Improves the Human Computer Interaction (HCI) by replacing the mouse",
        "PowerPoint Presentation using Hand Gestures"
      ],
      
    },
    /*
    title: "SPEECH-RECOGNITION AI MODEL FOR TRIBEL AREA",
      company_name: "Shopify",
      icon: shopify,
      role:'Backend Dev , Frontend Dev',
      iconBg: "#383E56",
      date: "Feb 2022 - March 2022",
      points: [
        "Take any language as an Input",
        "Converts the Input audio into the desired text output selected by the user",
        "To improve HCI the Backend is Connected to an UI using Tinkter",
      ],
    */
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "sih",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "SIH2022",
          color: "blue-text-gradient",
        },
        {
          name: "Finalist",
          color: "green-text-gradient",
        },
        {
          name: "TeamLead",
          color: "pink-text-gradient",
        },
      ],
      image: sih,
      source_code_link: "https://github.com/",
    },
    {
      name: "bit",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "bithacks",
          color: "blue-text-gradient",
        },
        {
          name: "winner",
          color: "green-text-gradient",
        },
        {
          name: "5000",
          color: "pink-text-gradient",
        },
      ],
      image: bit,
      source_code_link: "https://github.com/",
    },
    
    {
      name: "archathon",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Arcathon",
          color: "blue-text-gradient",
        },
        {
          name: "winner",
          color: "green-text-gradient",
        },
        {
          name: "BestProjectAward",
          color: "pink-text-gradient",
        },
        
      ],
      image: arch,
      source_code_link: "https://github.com/",
    },
    {
      name: "krizen",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "projectCompetition",
          color: "blue-text-gradient",
        },
        {
          name: "Inception",
          color: "green-text-gradient",
        },
        {
          name: "winner",
          color: "pink-text-gradient",
        },
       
      ],
      image: winner,
      source_code_link: "https://github.com/",
    },
    {
      name: "intern",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "internship",
          color: "blue-text-gradient",
        },
        {
          name: "ethicalHacking",
          color: "green-text-gradient",
        },
       
      ],
      image: ethical,
      source_code_link: "https://github.com/",
    },
    {
      name: "trainer",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "trainner",
          color: "blue-text-gradient",
        },
        {
          name: "C /C++ /Qt",
          color: "pink-text-gradient",
        },
       
      ],
      image: trainer,
      source_code_link: "https://github.com/",
    },
    {
      name: "patten",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "pattent",
          color: "green-text-gradient",
        },
        {
          name: "smartGadget",
          color: "pink-text-gradient",
        },
       
      ],
      image: pattent,
      source_code_link: "https://github.com/",
    },
    {
      name: "journal",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "journal",
          color: "blue-text-gradient",
        },
        {
          name: "blockChainTechnology",
          color: "green-text-gradient",
        },
        {
          name: "scopus",
          color: "pink-text-gradient",
        },
       
      ],
      image: scopus,
      source_code_link: "https://github.com/",
    },
    {
      name: "certification",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "certifications",
          color: "blue-text-gradient",
        },
        {
          name: "NVIDIA DLI",
          color: "green-text-gradient",
        },
        {
          name: "jetson",
          color: "pink-text-gradient",
        },
       
      ],
      image: nvidiacertificate,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };