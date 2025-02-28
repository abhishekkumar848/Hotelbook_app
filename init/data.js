const sampleData = [
    {
      title: "Cozy Beachfront Cottage",
      description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image:{
        url :"https://cdn01.alison-static.net/courses/6831/alison_courseware_intro_6831.jpg",
        filename:"Listing"
      },
      image1: "https://cdn01.alison-static.net/courses/7285/alison_courseware_intro_7285.jpg",
      image2: "https://cdn01.alison-static.net/courses/7131/alison_courseware_intro_7131.jpg",
      price: 1500,
      discount: 5.7,
      location: "Malibu",
      country: "United States"
    },
    {
      title: "Luxury Villa in Santorini",
      description: "Stay in a luxurious villa with a private infinity pool and stunning sea views.",
      image:{
        url :"https://cdn01.alison-static.net/courses/6451/alison_courseware_intro_6451.jpg",
        filename:"Listing"
      } ,
      image1: "https://cdn01.alison-static.net/courses/7300/alison_courseware_intro_7300.jpg",
      image2: "https://cdn01.alison-static.net/courses/7300/alison_courseware_intro_7300.jpg",
      price: 2200,
      discount: 10.0,
      location: "Santorini",
      country: "Greece"
    },
    {
      title: "Mountain View Cabin",
      description: "A cozy cabin in the mountains, perfect for hiking and relaxation.",
      image:{
        url:"https://cdn01.alison-static.net/courses/6451/alison_courseware_intro_6451.jpg",
        filename:"Listing"
      } ,
      image1: "https://cdn01.alison-static.net/courses/6565/alison_courseware_intro_6565.jpg",
      image2: "https://cdn01.alison-static.net/courses/6451/alison_courseware_intro_6451.jpg",
      price: 900,
      discount: 7.5,
      location: "Aspen",
      country: "United States"
    },
    {
      title: "Skyline Penthouse Suite",
      description: "An exclusive penthouse suite offering breathtaking city views.",
      image:{
        url:"https://cdn01.alison-static.net/courses/6451/alison_courseware_intro_6451.jpg",
        filename:"Listing"
      } ,
      image1: "https://cdn01.alison-static.net/courses/6831/alison_courseware_intro_6831.jpg",
      image2: "https://cdn01.alison-static.net/courses/6451/alison_courseware_intro_6451.jpg",
      price: 3500,
      discount: 12.0,
      location: "New York",
      country: "United States"
    },
    {
      title: "Tropical Resort Bungalow",
      description: "Stay in a private bungalow surrounded by lush greenery and tropical vibes.",
      image:{
        url:"https://www.blogtyrant.com/best-online-course-platforms/",
        filename:"Listing"
      } ,
      image1: "https://www.geeksforgeeks.org/courses/dsa-self-paced",
      image2: "",
      price: 1100,
      discount: 6.5,
      location: "Bali",
      country: "Indonesia"
    },
    {
      title: "Desert Oasis Retreat",
      description: "Experience tranquility in a desert resort with modern comforts.",
      image:{
        url:"https://cdn01.alison-static.net/courses/7131/alison_courseware_intro_7131.jpg",
        filename:"Listing"
      } , 
      image1: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/448958fd-e9c1-4875-97ed-43a450e61f37.png",
      image2: "https://www.geeksforgeeks.org/courses/data-science-live",
      price: 1300,
      discount: 8.0,
      location: "Dubai",
      country: "United Arab Emirates"
    },
    {
      title: "Lakeside Cabin Retreat",
      description: "Relax in a quiet cabin by the lake, perfect for fishing and campfires.",
      image: {
        url:"https://web.whatsapp.com/20a03eb1-6985-4259-ac43-ed3252736cd8",
        filename:"Listing"
      } ,
      image1: "https://www.geeksforgeeks.org/courses/dsa-to-development-coding-guide",
      image2: "https://media.istockphoto.com/id/1295731728/photo/gorgeous-wood-flooring-in-master-bathroom.webp?a=1&s=612x612&w=0&k=20&c=da4IqcxeBmOiom29H9S2VdofeEFtBc8XVDhwODPAV8I=",
      price: 750,
      discount: 4.0,
      location: "Lake Tahoe",
      country: "United States"
    },
    {
      title: "Historical Castle Stay",
      description: "Stay in a centuries-old castle and experience medieval luxury.",
      image:{
        url: "https://cdn01.alison-static.net/courses/7216/alison_courseware_intro_7216.jpg",    filename:"Listing"  

      } ,
      image1: "https://cdn01.alison-static.net/courses/6831/alison_courseware_intro_6831.jpg",
      image2: "https://www.blogtyrant.com/best-online-course-platforms/",
      price: 2800,
      discount: 9.2,
      location: "Edinburgh",
      country: "Scotland"
    },
    {
      title: "Jungle Treehouse Escape",
      description: "Sleep among the treetops in this unique jungle treehouse.",
      image:{
        url:"https://img.freepik.com/free-psd/artificial-intelligence-template-design_23-2151640385.jpg?t=st=1740713460~exp=1740717060~hmac=dd533d10ea0446136eb798290fcb835d9ac96166618d482695bbd3538cb9ccad&w=826",filename:"Listing"
      } ,
      image1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fstudy&psig=AOvVaw15l_aZRczE1gktCwxox-ML&ust=1740799970217000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCWvsK35YsDFQAAAAAdAAAAABAE",
      image2: "https://cdn01.alison-static.net/courses/7216/alison_courseware_intro_7216.jpg",
      price: 600,
      discount: 5.5,
      location: "mumbai",
      country: "india"
    },
    {
      title: "Ice Hotel Igloo Experience",
      description: "Experience the magic of an igloo stay in a real ice hotel.",
      image:{
        url:"https://cdn01.alison-static.net/courses/7216/alison_courseware_intro_7216.jpg",filename:"Listing"
      } ,
      image1: "https://cdn01.alison-static.net/courses/6451/alison_courseware_intro_6451.jpg",
      image2: "https://cdn01.alison-static.net/courses/6565/alison_courseware_intro_6565.jpg",
      price: 1800,
      discount: 6.0,
      location: "Lapland",
      country: "Finland"
    },
    {
        title: "Oceanfront Paradise Retreat",
        description: "Enjoy the serenity of ocean waves in this luxurious beachfront retreat with stunning views.",
        image:{
          url:"https://www.goclasses.in/s/store/courses/65cc846ae4b0a7d6add2a8dd/cover.jpg?v=1",filename:"Listing"
        } ,
        image1: "https://cdn.shopaccino.com/igmguru/products/machine-learning-training-igmguru_1499895199_l.jpg?v=490",
        image2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fstudy&psig=AOvVaw15l_aZRczE1gktCwxox-ML&ust=1740799970217000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCWvsK35YsDFQAAAAAdAAAAABAE",
        price: 1800,
        discount: 6.5,
        location: "Miami",
        country: "United States"
      },
      {
        title: "Luxury Santorini Escape",
        description: "Stay in an elegant villa overlooking the Aegean Sea with world-class amenities.",
        image:{
          url:"https://img.freepik.com/free-psd/artificial-intelligence-template-design_23-2151640385.jpg?t=st=1740713460~exp=1740717060~hmac=dd533d10ea0446136eb798290fcb835d9ac96166618d482695bbd3538cb9ccad&w=826",filename:"Listing"
        } , 
        image1: "https://www.geeksforgeeks.org/courses/data-science-live",
        image2: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/1ecbdc1d-5866-4044-b474-1d1a6231c324.jpeg",
        price: 2300,
        discount: 10.0,
        location: "Santorini",
        country: "Greece"
      },
      {
        title: "Alpine Mountain Chalet",
        description: "A cozy wooden chalet nestled in the mountains, perfect for skiing and relaxation.",
        image:{
          url:"https://img.freepik.com/free-psd/artificial-intelligence-template-design_23-2151640385.jpg?t=st=1740713460~exp=1740717060~hmac=dd533d10ea0446136eb798290fcb835d9ac96166618d482695bbd3538cb9ccad&w=826",filename:"Listing"
        } , 
        image1: "https://cdn.shopaccino.com/igmguru/products/machine-learning-training-igmguru_1499895199_l.jpg?v=490",
        image2: "https://www.goclasses.in/s/store/courses/65cc846ae4b0a7d6add2a8dd/cover.jpg?v=1",
        price: 950,
        discount: 7.8,
        location: "Aspen",
        country: "United States"
      },

  ];
  
module.exports ={data : sampleData};