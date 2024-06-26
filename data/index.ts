export const navItems = [
    { name: "Home", link: "#home"},
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Frontend developer with over 8 years of experience in building complicated, responsive and modern applications",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Have experience in working with teams across the globe.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "I have leadership experience and always ready to take initiatives and its responsibility",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "Currently building a fun project on sports tournament polling and social application.",
      description: "Pred2Win",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you have an interesting opportunity for me?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Case Manager core library - Backbase",
      des: "Created an employee facing core banking FE components library with Backbase used to build and configure secured employee facing banking application. It would allow developers to integrate different banking journeys.",
      img: "/case-manager.png",
      iconLists: ["/angular.svg", "/ts.svg", "/reactivex.svg", "/nx.svg", "/dock.svg"],
    },
    {
      id: 2,
      title: "MAGIC - FedEx",
      des: "MAGIC is a set of high traffic customer facing application of FedEx Rating and shipping built on Angular. People or big businesses can put up the details of the package(s) and get rates and move forward with shipping.",
      img: "/fedEx.jpeg",
      iconLists: ["/angular.svg", "/ts.svg", "/bootstrap.svg", "/js.svg", "/storybook.svg"],
      link: "https://www.fedex.com/en-us/online/rating.html#",
    },
    {
      id: 3,
      title: "Smart Admin - Mphasis",
      des: "An Admin dashboard for our client FedEx to set up logistic configuration for different countries. It would get rid of any manual process like uploading country wise translations files, user role configurations etc.",
      img: "/smart-admin.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "nodejs.svg"]
    },
    {
      id: 4,
      title: "NgVoting",
      des: "ng-voting is a reusable Angular component that can be used to easily implement a voting platform in your app. It is responsive and completely customizable. This component was made for a fun Football polling platform.",
      img: "/ngvoting.gif",
      iconLists: ["/angular.svg", "/sass.svg", "/html.svg"],
      link: "https://socket.dev/npm/package/ng-voting",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Having worked with Jeet for over a year on a major Digital program, he has grown in the role as a font-end developer and has become very capable in the world of Angular development. As a collaborative team player, he is highly motivated and is always looking for innovative solutions to problems and I feel he would be a valuable asset to any development team. Would highly recommend Jeet.",
      name: "Karl Desmond",
      title: "Manager, XI Consulting at BearingPoint",
      img: "",
      subtitle: "Karl worked with Jeet as Director of IT Architecure at FedEx"
    },
    {
      quote:
        "Next to the fact that Jeet is an amazing guitar player, he is even better as a front-end dev. Jeet has the natural drive to better himself, his skills and the product he is working on. Always curious on the business reasons behind IT features, he is a great partner in translating stories to experiences. Jeet was a rockstar when we had a very tight deadline on a complex feature at FedEx, and worked day and night to deliver as promised. The result was above all expectations, targets were met and stakeholders in awe how we could have got this done in the timeframe. I would hire Jeet again in a heartbeat when the opportunity presents itself.",
      name: "Hensen Blaauw",
      title: "Senior Product Owner Freemium @DPG",
      subtitle: "Hensen worked with Jeet as Product Owner at FedEx",
      img: ""
    }
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Backbase",
      img: "",
      nameImg: "/backbase-logo.svg",
    },
    {
      id: 2,
      name: "FedEx",
      img: "",
      nameImg: "/fedex-logo.svg",
    },
    {
      id: 3,
      name: "Mphasis",
      img: "",
      nameImg: "/mphasis-logo.svg",
    }
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Senior Frontend Developer - Backbase",
      desc: "Lead the migration of Digital sales Frontend products from Portal to Portalless. * Helped in designing the structure of FE core library for digital sales, and also lead the monthly release for FE. * Hosting FE chapter meetings, sharing knowledge among teams and drive initiatives.* Right now also working as DevOps for Digital sales tribe, helping in automating release process, and built new tools to reduce monthly manual release work for FEs, and speeding up the release process.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Frontend Developer - Backbase",
      desc: "Working as an R&D frontend developer to contribute in building banking widgets that can be tied together to build banking applications, used by well known banks across continents. • Building FE libraries, for portal applications. • Taking responsibilities, and collaborating with different teams for resolving all dependencies.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Frontend Developer - FedEx",
      desc: "Have contributed in building user friendly and responsive front end for the Rating and Shipping application for FedEx which are currently live. https://www.fedex.com/en-us/online/rating.html • Worked in SAFe Agile along with seven different teams located internationally to align and work on a single product. • Built a re-usable UI Library using Angular, which are currently used in many projects within organisation.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Associate Software Engineer - Mphasis",
      desc: "Started as a fresher, and got the opportunity to work at client’s location (Netherlands) within 2.5 years of experience. Build 'Smart Admin' from scratch while working with React, CSS, Javascript, HTML, NodeJs Taken part in many FE guilds, to discuss about FE technologies and how we can improve the existing scenarios.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    }
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/jeetadhikari92"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/jeet-adhikari-645447136/"
    },
  ];