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
      title: "Data Scientist",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    {
      title: "AWS",
      icon: backend,
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
      name: "clogo",
      icon: clogo,
    },
    {
      name:"linux",
      icon: linux,
    },{
      name: "mysql",
      icon: sql,
    },
  
    {
      name: "nivia",
      icon: nvidia,
    },
  
    {
      name: "python",
      icon: python,
    },
   
   
  ];
  
  const experiences = [
    {
      title: "Food Order Website ",
      company_name: "OpenCV",
      icon: tesla,
      role:"Frontend Dev",
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        " A React Js based website for food ordering system",
            ],
    },
    {
      title: "License Plate Recongition System ",
      company_name: "BIT",
      role:" Backend Dev",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jun 2022 - Aug 2022",
      points: [
        " The main aim of this project is barricade automation for the college using Edge computing .",
        " The custom trained yolo V5  model has been genrated basis on the our own Dataset consists our college images.",
        " The input is proceesed in Edge computing Device(Jetson Nano Developer Kit) with the YOLO model generated.",
        " The OCR is used to extract the text form the Number plate and verify from the db and open the barricade. ",
      ],
    },
    {
      title: "NLU Based Chat-Bot using RASA ",
      company_name: "Shopify",
      icon: shopify,
      role:'Backend Dev , ',
      iconBg: "#383E56",
      date: "Feb 2022 - March 2022",
      points: [
        "It works under the concept  Natural Language Understanding. ",
        "It understands the user input and gives output from the API integrated. ",
        "It genrates automated replies basis on the stories given.",
      ],
    },
    {
      title: "NLP based Voice Assistant for students ",
      company_name: "OpenCV",
      icon: meta,
      role:"Backend Dev",
      iconBg: "#E6DEDD",
      date: "Dec 2021 - Jan 2022",
      points: [
        " Translates the speech to text and speech in vernacular  languages using NLP.",
        "Translates the language using gtts API.",
        "Text summarizer for the content given.",
        "Question generation forthe staff based on the lecture given. ",
        
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
       
       
      ],
      image:sih,
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
          name: "special mention ",
          color: "green-text-gradient",
        },
        {
          name: "3000",
          color: "pink-text-gradient",
        },
      ],
      image: bit,
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
          name: "cyber security",
          color: "green-text-gradient",
        },
       
      ],
      image: ethical,
      source_code_link: "https://github.com/",
    },
    
       
    
    {
      name: "patten",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "patent",
          color: "green-text-gradient",
        },
        {
          name: "smart waste management ",
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