import React, { useState } from "react";

import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Home from "@iconscout/react-unicons/icons/uil-house-user";
import Notifications from "@iconscout/react-unicons/icons/uil-bell";
import Messages from "@iconscout/react-unicons/icons/uil-envelope";
import Bookmarks from "@iconscout/react-unicons/icons/uil-bookmark";
import Lists from "@iconscout/react-unicons/icons/uil-list-ul";
import Profile from "@iconscout/react-unicons/icons/uil-user";
import More from "@iconscout/react-unicons/icons/uil-ellipsis-h";
import Tweet from "@iconscout/react-unicons/icons/uil-comment-plus";
import ArrowDown from '@iconscout/react-unicons/icons/uil-angle-down'
// backend
import UserPhoto from '@iconscout/react-unicons/icons/uil-user-circle'


import { MoreList, TweetModal } from "../";
import Links from "./Links.json";

import { NavLink } from "react-router-dom";

import { selectUserId, selectUserName } from "../../app/features/userReducer";
import { useAppSelector } from "../../app/hooks";

const Left: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [tweetModal, setTweetModal] = useState(false);
  const userName = useAppSelector(selectUserName);
  const userId = useAppSelector(selectUserId);
  
  const icons = [
    { Home: Home },
    { Explore: "#" },
    { Notifications: Notifications },
    { Messages: Messages },
    { Bookmarks: Bookmarks },
    { Lists: Lists },
    { Profile: Profile },
    { More: More },
  ];
  
  const renderLinks = () => {
    return Links.links.map((el, index) => {
      const Icon = icons[index][el.name];
      return (
        <NavLink key={index} to={el.path} className="Link">
          {typeof Icon == "string" ? (
            <span className="text-4xl font-italic font-normal">{Icon}</span>
          ) : (
            <Icon />
          )}
          <span className="LinkText">{el.name}</span>
        </NavLink>
      );
    });
  };
  
  const openMoreModal = () => {
    setShowMore(true);
  };
  
  const closeMoreModal = () => {
    setShowMore(false);
  };
  
  const openTweetModal = () => {
    setTweetModal(true);
  };
  
  const closeTweetModal = () => {
    setTweetModal(false);
  };
  
  return (
    <div className="Left">
      <NavLink to="/" className="Link my-4">
        <span className="TwitterLogo">
          <Twitter color="#1d9bf0" size="40px" />
        </span>
      </NavLink>
      {renderLinks()}
      <button
        className={["Link", showMore ? "active" : null].join(" ")}
        onClick={openMoreModal}
      >
        <More />
        <span className={["LinkText"].join(" ")}>More</span>
      </button>
      <MoreList
        className={[showMore ? "active" : null]}
        isOpen={showMore}
        onRequestClose={closeMoreModal}
      />
      <button className="Btn Tweet" onClick={openTweetModal}>
        <span className="hidden xl:block">Tweet</span>
        <span className="xl:hidden">{<Tweet />}</span>
      </button>
      <TweetModal isOpen={tweetModal} onRequestClose={closeTweetModal} />
      <button className="User hover:bg-gray-200 dark:hover:bg-transparent rounded-full p-2 text-sm w-14 lg:w-full mx-auto mt-auto mb-2 flex justify-between transition duration-300 gap-x-4 items-center" >
        <div className="text-blue-500 text-8xl">
          <UserPhoto size="50px" />
        </div>
        <div className="hidden xl:flex flex-col">
          <div className="font-bold">{userName}</div>
          <div>{userId}</div>
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <ArrowDown />
        </div>
      </button>
    </div>
  );
};

export default Left;
