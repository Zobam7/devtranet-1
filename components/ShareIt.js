import React, { useState } from "react";
import TwitterIcon from "../components/icons/Twitter";
import LinkedinIcon from "../components/icons/Linkedin";
import FacebookIcon from "../components/icons/Facebook";
import ExternalIcon from "../components/icons/ExternalIcon";
import CancelIcon from "../components/icons/CancelIcon";

export default function ShareIt() {
  const [share, setShare] = useState(false);
  return (
    <div>
      <p className="flex items-center gap-2">
        <svg
          onClick={() => setShare(true)}
          width="25"
          height="25"
          viewBox="0 0 24 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.5 0.25V5.25C5.75 6.5 2 12.75 0.75 19C3.875 14.625 8.25 12.625 14.5 12.625V17.75L23.25 9L14.5 0.25ZM17 6.2875L19.7125 9L17 11.7125V10.125H14.5C11.9125 10.125 9.5875 10.6 7.425 11.3125C9.175 9.575 11.425 8.2125 14.85 7.75L17 7.4125V6.2875Z"
            fill="currentColor"
          />
        </svg>
        {share ? (
          <div className="flex justify-center items-center  fixed inset-0 z-50 outline-none focus:outline-none rounded-lg w-full mx-auto ">
            <div className="relative  my-6 mx-auto p-5 w-max px-10 bg-white dark:bg-dark rounded-lg cursor-pointer">
              <div>
                <div className="flex items-center mb-5">
                  <h1 className="mx-auto font-semibold text-28px font-face">Share it </h1>
                  <span className="items-center" onClick={() => setShare(false)}>
                    <CancelIcon />
                  </span>
                </div>

                <div className="flex gap-x-10 items-center justify-center">
                  <span className="rounded-full shadow-[2px_2px_15px_-3px_rgba(0,0,0,0.3)] p-4">
                    <FacebookIcon />
                  </span>
                  <span className="rounded-full shadow-[2px_2px_15px_-3px_rgba(0,0,0,0.3)] p-4">
                    <TwitterIcon />
                  </span>
                  <span className="rounded-full shadow-[2px_2px_15px_-3px_rgba(0,0,0,0.3)] p-4">
                    <LinkedinIcon />
                  </span>
                  <span className="rounded-full shadow-[2px_2px_15px_-3px_rgba(0,0,0,0.3)] p-4">
                    <ExternalIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </p>
    </div>
  );
}
