import React from "react";

const Why_chatter = () => {
  return (
    <div className="p-20 flex flex-col justify-center items-center">
      <div className=" max-w-5xl flex flex-col gap-10">
        <h1 className="text-center font-bold text-4xl">
          Why you should join chatter
        </h1>
        <p className="text-lg">
          Our goal is to make writers and readers see our platform as their next
          heaven for blogging, ensuring ease in interactions, connecting with
          like-minded peers, have access to favorite content based on interests
          and able to communicate your great ideas with people
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 p-10 gap-16">
        <div className="w-60 border shadow-sm rounded flex flex-col gap-4  p-4">
          <div>
            <svg
              width="92"
              height="88"
              viewBox="0 0 92 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34 30H32V56C32 56.5304 32.2107 57.0391 32.5858 57.4142C32.9609 57.7893 33.4696 58 34 58H60V56H34V30Z"
                fill="black"
              />
              <path
                d="M60 37H53V39H56.59L49 46.59L44.71 42.29C44.617 42.1963 44.5064 42.1219 44.3846 42.0711C44.2627 42.0203 44.132 41.9942 44 41.9942C43.868 41.9942 43.7373 42.0203 43.6154 42.0711C43.4936 42.1219 43.383 42.1963 43.29 42.29L36 49.59L37.41 51L44 44.41L48.29 48.71C48.383 48.8037 48.4936 48.8781 48.6154 48.9289C48.7373 48.9797 48.868 49.0058 49 49.0058C49.132 49.0058 49.2627 48.9797 49.3846 48.9289C49.5064 48.8781 49.617 48.8037 49.71 48.71L58 40.41V44H60V37Z"
                fill="black"
              />
              <ellipse
                cx="46"
                cy="44"
                rx="46"
                ry="44"
                fill="#D6D1F8"
                fill-opacity="0.2"
              />
            </svg>
          </div>
          <h1 className="font-semibold text-base">Analytics</h1>
          <p>
            Analytics to track the number of views, likes and comment and also
            analyze the performance of your articles over a period of time
          </p>
        </div>
        <div className="w-60 border shadow-sm rounded flex flex-col gap-4  p-4">
          <div>
            <svg
              width="92"
              height="88"
              viewBox="0 0 92 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 39C41.0609 39 42.0783 38.5786 42.8284 37.8284C43.5786 37.0783 44 36.0609 44 35C44 33.9391 43.5786 32.9217 42.8284 32.1716C42.0783 31.4214 41.0609 31 40 31C38.9391 31 37.9217 31.4214 37.1716 32.1716C36.4214 32.9217 36 33.9391 36 35C36 36.0609 36.4214 37.0783 37.1716 37.8284C37.9217 38.5786 38.9391 39 40 39ZM32 43.5C32 42.837 32.2634 42.2011 32.7322 41.7322C33.2011 41.2634 33.837 41 34.5 41H40.875C40.6264 41.6375 40.4992 42.3158 40.5 43C40.5 44.86 41.423 46.505 42.837 47.5H40.5C39.7687 47.4999 39.0514 47.7003 38.4261 48.0793C37.8007 48.4584 37.2912 49.0016 36.953 49.65C35.037 49.157 33.811 48.198 33.054 47.11C32 45.595 32 44.026 32 43.75V43.5ZM55.047 49.65C56.963 49.157 58.189 48.198 58.946 47.11C60 45.595 60 44.025 60 43.75V43.5C60 42.837 59.7366 42.2011 59.2678 41.7322C58.7989 41.2634 58.163 41 57.5 41H51.125C51.367 41.62 51.5 42.294 51.5 43C51.5 44.86 50.577 46.505 49.163 47.5H51.5C52.2313 47.4999 52.9486 47.7003 53.5739 48.0793C54.1993 48.4584 54.7088 49.0016 55.047 49.65ZM56 35C56 36.0609 55.5786 37.0783 54.8284 37.8284C54.0783 38.5786 53.0609 39 52 39C50.9391 39 49.9217 38.5786 49.1716 37.8284C48.4214 37.0783 48 36.0609 48 35C48 33.9391 48.4214 32.9217 49.1716 32.1716C49.9217 31.4214 50.9391 31 52 31C53.0609 31 54.0783 31.4214 54.8284 32.1716C55.5786 32.9217 56 33.9391 56 35ZM38 51.5C38 50.837 38.2634 50.2011 38.7322 49.7322C39.2011 49.2634 39.837 49 40.5 49H51.5C51.8283 49 52.1534 49.0647 52.4567 49.1903C52.76 49.3159 53.0356 49.5001 53.2678 49.7322C53.4999 49.9644 53.6841 50.24 53.8097 50.5433C53.9353 50.8466 54 51.1717 54 51.5V51.75C54 52.025 54 53.595 52.946 55.11C51.846 56.691 49.756 58 46 58C42.245 58 40.154 56.691 39.054 55.11C38 53.595 38 52.026 38 51.75V51.5ZM46 47C47.0609 47 48.0783 46.5786 48.8284 45.8284C49.5786 45.0783 50 44.0609 50 43C50 41.9391 49.5786 40.9217 48.8284 40.1716C48.0783 39.4214 47.0609 39 46 39C44.9391 39 43.9217 39.4214 43.1716 40.1716C42.4214 40.9217 42 41.9391 42 43C42 44.0609 42.4214 45.0783 43.1716 45.8284C43.9217 46.5786 44.9391 47 46 47Z"
                fill="black"
              />
              <ellipse
                cx="46"
                cy="44"
                rx="46"
                ry="44"
                fill="#D6D1F8"
                fill-opacity="0.2"
              />
            </svg>
          </div>
          <h1 className="font-semibold text-base">Social Interactions</h1>
          <p>
            Users on the platform can interact with posts they like, comment and
            engage in discussions
          </p>
        </div>
        <div className="w-60 border shadow-sm rounded flex flex-col gap-4  p-4">
          <div>
            <svg
              width="92"
              height="88"
              viewBox="0 0 92 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.6667 40V42H35.3333V40H56.6667ZM51.3333 32V34H35.3333V32H51.3333ZM46 56V46H56.6667V56H46ZM48.6667 48V54H54V48H48.6667ZM56.6667 36V38H35.3333V36H56.6667ZM30 28H62V60H30V28ZM59.3333 58V30H32.6667V58H59.3333ZM43.3333 54V56H35.3333V54H43.3333ZM43.3333 46V48H35.3333V46H43.3333ZM43.3333 50V52H35.3333V50H43.3333Z"
                fill="black"
              />
              <ellipse
                cx="46"
                cy="44"
                rx="46"
                ry="44"
                fill="#D6D1F8"
                fill-opacity="0.2"
              />
            </svg>
          </div>
          <h1 className="font-semibold text-base">Content creation</h1>
          <p>
            Write nice and appealing with our in-built markdown, a rich text
            editor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why_chatter;
