"use client";

import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

import "./team.css";

export default function TeamCard({ member }) {
  return (
    <div className="team-card">

      {/* Background */}
      <div className="team-background" />

      {/* Teacher Image */}

      <div className="team-image">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Bottom Info */}

      <div className="team-info">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>

      {/* Social Buttons */}

      <a
        href={member.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="team-box team-box1">
          <FaFacebookF size={20} />
        </div>
      </a>

      <a
        href={member.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="team-box team-box2">
          <FaInstagram size={20} />
        </div>
      </a>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="team-box team-box3">
          <FaLinkedinIn size={20} />
        </div>
      </a>

      <a
        href={member.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="team-box team-box4">
          <FaWhatsapp size={20} />
        </div>
      </a>

    </div>
  );
}