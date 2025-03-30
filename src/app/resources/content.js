import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Primordial",
  lastName: "Groove",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Underground House Music Collective",
  avatar: "/LOGO.png",
  location: "America/Los_Angeles", // Actual timezone for calculations
  locationDisplay: "America/Bay_Area", // Display text for the location
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName} {person.lastName} Newsletter</>,
  description: (
    <>
      Stay updated on our latest events, music releases, and community happenings in the Bay Area underground house music scene.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/primordial.groove/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/primordial.groove/",
  },
  {
    name: "Twitch",
    icon: "twitch",
    link: "https://www.twitch.tv/primordial_groove",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:info@primordialgroove.com",
  },
];

const home = {
  label: "Home",
  title: "Primordial Groove | Bay Area Underground House Music",
  description: "Bay Area's premier underground house music collective, bringing together music lovers and artists.",
  headline: <>Bay Area's Underground House Music Collective</>,
  subline: (
    <>
      We're <InlineCode>Primordial Groove</InlineCode>, a collective dedicated to 
      <br /> preserving and evolving the underground house music scene.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Us",
  description: "Primordial Groove is the Collectives' Collective",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://lu.ma/primordialgroove",
  },
  intro: {
    display: true,
    title: "Our Story",
    description: (
      <>
        Born in East Bay, Primordial Groove emerged from a shared vision to create something extraordinary in the underground music scene. We're building a platform for experimental DJs, visual artists, and digital pioneers to come together and create unforgettable experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Our Events",
    experiences: [
      {
        company: "Bay Area Venues",
        timeframe: "2024 - Present",
        role: "Immersive Experiences",
        achievements: [
          <>
            Hosted over 20 events across clubs, coffee shops, and outdoor spaces, each pushing the boundaries of what's possible in local community events.
          </>,
          <>
            Created a platform for experimental DJs, visual artists, and digital pioneers to collaborate and create unforgettable experiences.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Primordial Groove Event",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Community Building",
        timeframe: "2024 - Present",
        role: "Cultural Movement",
        achievements: [
          <>
            Established a vibrant, inclusive community of music lovers and artists dedicated to the underground house music scene.
          </>,
          <>
            Fostered collaboration between DJs, producers, visual artists, and event organizers to create a thriving ecosystem.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Our Values",
    institutions: [
      {
        name: "Community",
        description: <>Building a vibrant, inclusive community of music lovers and artists.</>,
      },
      {
        name: "Innovation",
        description: <>Pushing boundaries and exploring new sounds in underground house music.</>,
      },
      {
        name: "Authenticity",
        description: <>Staying true to the roots of house music while evolving with the times.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "What We Do",
    skills: [
      {
        title: "Music Events",
        description: <>Curating immersive, community-driven experiences in the Bay Area.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Event image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Event image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Artist Collective",
        description: <>Supporting and promoting underground DJs, producers, and visual artists.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Artist image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "News & Updates",
  description: "Latest happenings in the Primordial Groove community",
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Events",
  title: "Upcoming Events",
  description: "Join us for our next underground house music experience",
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "Event Gallery",
  description: "Moments from our past events and experiences",
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "event image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "event image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "event image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "event image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "event image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "event image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "event image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "event image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "event image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "event image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "event image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "event image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "event image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "event image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
