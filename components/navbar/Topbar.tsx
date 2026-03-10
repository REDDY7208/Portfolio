import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <section className="flex justify-between items-center py-8 px-8 md:px-12">
        <div>
          <Link href={"/"}>
            <h1 className="text-xl md:text-[22px] font-bold tracking-wide flex items-baseline gap-1">
              Praveen Kumar <span className="text-primary">Reddy</span>
              {/* <span className="text-white text-xs">.</span> */}
            </h1>
          </Link>
        </div>
        <div className="flex gap-4 md:gap-7 items-center opacity-80">
          <Link
            href={"http://www.linkedin.com/in/praveen-reddy-115158239"}
            target="_blank"
            className="text-[15px] font-medium hover:text-primary transition-colors duration-300"
          >
            in
          </Link>
          <Link
            href={"https://github.com/praveenkumarreddy9866"}
            target="_blank"
          >
            <Github
              size={16}
              className="hover:text-primary transition-colors duration-300"
            />
          </Link>
          <Link href={"mailto:praveenkumarreddy9866@gmail.com"}>
            <Mail
              size={16}
              className="hover:text-primary transition-colors duration-300"
            />
          </Link>
          <Link href={"tel:+919866466266"}>
            <Phone
              size={16}
              className="hover:text-primary transition-colors duration-300"
            />
          </Link>
          {/* <Link href={"#"}>
            <Twitter
              size={16}
              className="hover:text-primary transition-colors duration-300"
            />
          </Link>
          <Link href={"#"}>
            <MapPin
              size={16}
              className="hover:text-primary transition-colors duration-300"
            />
          </Link> */}
        </div>
      </section>
    </div>
  );
}

export default Topbar;
