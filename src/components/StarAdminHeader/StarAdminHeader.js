import React from "react";
import "./StarAdminHeader.scss";
import { Popover } from "antd";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMailOutline,MdAlarmOn } from "react-icons/md";
import {BiBookmarkPlus} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'

export const StarAdminHeader = () => {
  const content = (
    <div>
      <div className="country-menu-item">
        <img
          src="data:image/png;base64,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"
          alt="/"
          className="flags"
        />
        <p className="language">English</p>
      </div>
      <div className="country-menu-item">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAARVBMVEX///8AJlPOEScAJlQAFFEAKE0BJVZ2hpjOEiXPAB3TgYTQDyno6OjQECf//f/q6OoGK1gAG1ZsfZDq8O/r7ujPd3vNEyqjTlYkAAABTUlEQVR4nO3TSQ7CMBREQeMwJCTEme9/VCBrtl/IUr0jlLrTNF0iau63eVnLEFPZ9q49ckx9ChE5Ta6PFNWYnl2OMjnqNWmDSHKu2MR3fpi8gqrYpA8iqXQn6TTxHSZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyb/NWkCTcYgkfFjko8gk5ymEJKvybysZYipbHvXRpn0bznrALRzpDS4AAAAAElFTkSuQmCC"
          alt="/"
          className="flags"
        />
        <p className="language">French</p>
      </div>
      <div className="country-menu-item">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAYFBMVEUAAAD///8Aej3OESYAgEAAbR/XEijVACXLAACcQC6aQS+gPS6ePi6QDBuDCxiGCxmRDBuWDBzjkpfmnKGKCxnhh43ijpPklpvmn6SYSjIAhUHbACN8UzPQABWILgEAcyHKsb2aAAADEUlEQVR4nO3bZ47bQBCE0Vn3WqRzzun+tzQM/zCsYpjEHbGqvhO0HgSJoSe9TO66i1GgMAoURoHCKFAYBQqjQPEX5dXoOW6pMAoURoHCKFAYBQqjQGEUKIwCxf8o70fPcwuFUaAwCnRtYpQFE6MsmBhlwUQeZclEHWXRRBxl2UQbZcVEGmXNRBll1UQYZd1EF2XDRBZlyyQuL0aPN6RNE1GUbRNNlB0TSZQ9E0WUXRNBlH0TPZQMEzmUHBM1lCwTMZQ8k7i8Hj3oA5ZpIoWSa6KEkm0ihJJvooNSYCKDUmKiglJkIoJSZqKBUmgSlzejJz6+UhMFlGITAZRyE36UChN6lBoTdpQqE3KUOhNulEoTapRaE2aUahNilHoTXpQGk5i+fL0nrMkkpqf3j/hqM+FEaTShRGk1YURpNiFEaTfhQ+lgQofSw4QNpYtJTE+YUPqYcKF0MqFC6WXChNLNhAilnwkPSkeTmJ5zoPQ0YUHpakKC0teEA6WzCQVKbxMGlO4mBCj9Tc6PcoDJ6VGOMInp2alRDjE5OcoxJudGOcjk1ChHmZwZ5TCTE6McZxLfvo/+cJX5e4L59wTz/w7m6xPM17GY73cw3xdjfn6C+Tkb5uexmJ/bY36/g/k9IOb3xZj3CjDvn2DeU8K8z4Z57xHzfizmPWrM+/aYz2VgPr+D+ZwX5vOAmM+NYj5fjPkcOtZk8uPnr8eEtZjMH+4oazBhJWkwoSWpN+ElqTYhJqk1YSapNKEmqTPhJqkyISepMZk/jh764MpN6EnKTfhJik0ESEpNFEgKTSRIykw0SIpMREhKTFRICkxkSPJNdEiyTYRIck3mt6MHfcDyTKRI8ky0SLJMxEhyTNRIMkzkSPZN9Eh2TQRJ9kwUSXZMJEm2TeZPo8cb0paJKMmWiSrJhoksybqJLsmqiTDJmokyyYqJNMmyiTbJosn8bvRUY1swUSdZMJEnQROTgIlJwMQkd9cmJvlTMgmUTAIlk0D/TObPo2e5lZJJoGQSKJkESiaBkkmgZBIomQRKJoGSSaBkEug3x6sNMWm6UywAAAAASUVORK5CYII="
          alt="/"
          className="flags"
        />
        <p className="language">Arabic</p>
      </div>
      <div className="country-menu-last-item">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAGFBMVEX////VKx4AOab2+f0AN6UEOaPOKxwFPKiWjACKAAAA+UlEQVR4nO3QsQGDAAzAsFCg/P8xezyxSydoBgAAAAAAAAAAAAAAAAAAAOCjk20etrnY5sfmpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aTmZps/2xxsTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTmpFw4O1+wE1Ff8AAAAAElFTkSuQmCC"
          alt="/"
          className="flags"
        />
        <p className="language">Russian</p>
      </div>
    </div>
  );

  const ProfileContent = (
    <div className="profile-popover-container">
      <div className="bookmark-account-alarm-icon-container">
        <div className="icon-container">
          <BiBookmarkPlus className="icon"/>
        </div>
        <div className="icon-container">
            <BsPerson className="icon"/>
        </div>
        <div className="icon-container">
            <MdAlarmOn className="icon"/>
        </div>
      </div>
      <div className="profile-content-container">
        <p className="manage-accounts-content">
            Manage Accounts
        </p>
        <p className="change-password-content">
            Change Password
        </p>
        <p className="check-inbox-content">
            Check Inbox
        </p>
        <p className="sign-out-content">
            Sign Out
        </p>
      </div>
    </div>
  );
  return (
    <div className="star-admin-header">
      <div className="star-admin-logo-container">
        <img
          src="https://www.bootstrapdash.com/demo/star-admin-free/react/template/demo_1/preview/static/media/logo-mini.8539ea86.svg"
          alt="/"
          className="star-admin-logo"
        />
      </div>
      <div className="country-menu-container">
        <Popover placement="bottom" content={content} trigger={["click"]}>
          <img
            src="data:image/png;base64,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"
            alt="/"
            className="country-flags"
          />
        </Popover>
      </div>
      <div className="profile-container">
        <div className="notification-container">
          <p className="notifications-count">4</p>
          <IoMdNotificationsOutline className="notifications-icon" />
        </div>
        <div className="messages-container">
        <p className="messages-count">7</p>
          <MdOutlineMailOutline className="messages-icon" />
        </div>
        <div className="profile-pic-pop-over">
          <Popover  content={ProfileContent} trigger="click">
            <img
              src="https://www.bootstrapdash.com/demo/star-admin-free/react/template/demo_1/preview/static/media/face8.16958c47.jpg"
              alt="/"
              className="profile-pic"
            />
          </Popover>
        </div>
      </div>
    </div>
  );
};
