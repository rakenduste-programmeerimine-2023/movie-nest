"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

const ContactIcons = () => {
  return (
    <div className="flex flex-row gap-10">
      <FacebookShareButton url={"http://localhost:3000"}>
        <FacebookIcon size={64} square borderRadius={5} />
      </FacebookShareButton>
      <TwitterShareButton url={"http://localhost:3000"}>
        <TwitterIcon size={64} square borderRadius={5} />
      </TwitterShareButton>
      <RedditShareButton url={"http://localhost:3000"}>
        <RedditIcon size={64} square borderRadius={5} />
      </RedditShareButton>
      <EmailShareButton url={"http://localhost:3000"}>
        <EmailIcon size={64} square borderRadius={5} />
      </EmailShareButton>
      <LinkedinShareButton url={"http://localhost:3000"}>
        <LinkedinIcon size={64} square borderRadius={5} />
      </LinkedinShareButton>
    </div>
  );
};

export default ContactIcons;
