import React from "react";

function Footer() {
  return (
    <div className="flex flex-col gap-10 mt-28 md:flex-row md:justify-between ">
      <div>
      <ul className="flex gap-3 text-gray-500 text-lg">
        <li>
          <a to="#" className="">
            Facebook
          </a>
        </li>
        <li>
          <a to="#" className="">
            Instagram
          </a>
        </li>
        <li>
          <a to="#" className="">
            Twitter
          </a>
        </li>
      </ul>
      </div>
      <div className="flex flex-row justify-start gap-2 ">
        <div><img src="../../Assets/Help Avatar.svg" alt="Help" /></div>
        <div className="flex flex-col justify-top align-top">
          <div className="font-Playfair">Have any questions?</div>
          <div className="font-Lato font-semibold">Talk to a specialist</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
