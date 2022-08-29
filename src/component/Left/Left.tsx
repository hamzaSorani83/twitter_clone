import React from "react";

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


import { TwitterLogo } from "../";
import Links from "./Links.json";

import { NavLink } from "react-router-dom";

import { selectUserId, selectUserName } from "../../app/features/userReducer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectShowMore, setShowMore, setTweetModal } from "../../app/features/mainReducer";

const Left: React.FC = () => {
  const userName = useAppSelector(selectUserName);
  const userId = useAppSelector(selectUserId);
  const dispatch = useAppDispatch();
  const showMore = useAppSelector(selectShowMore);
  
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
    dispatch(setShowMore(true));
  };
  
  const openTweetModal = () => {
    dispatch(setTweetModal(true));
  };
  
  return (
    <div className="Left">
      <div>
      <TwitterLogo className="-translate-x-2" />
      {renderLinks()}
      <button
        className={["Link", showMore ? "active" : null].join(" ")}
        onClick={openMoreModal}
      >
        <More />
        <span className="LinkText">More</span>
      </button>
      <button className="Btn TweetBtn" onClick={openTweetModal}>
        <span className="hidden xl:block">Tweet</span>
        <span className="xl:hidden">{<Tweet />}</span>
        </button>
        {/* backend */}
      <button className="User" >
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
    </div>
  );
};

export default Left;
