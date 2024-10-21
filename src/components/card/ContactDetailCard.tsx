import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaTelegramPlane,
  FaMapMarkedAlt,
  FaUserCircle,
} from "react-icons/fa";
import LazyImage from "../template/LazyImage";

const ContactDetailCard = ({ contact }: { contact: IContact }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-full flex-shrink-0 transition-transform transform hover:scale-105 cursor-pointer">
      <LazyImage
        placeholder="/pwa/android-48-48.png"
        src={contact.avatar}
        alt={`${contact.first_name} ${contact.last_name}`}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-200 block aspect-auto"
      />
      <h3 className="text-2xl font-bold text-center mb-2">
        {contact.first_name} {contact.last_name}
      </h3>
      <p className="flex items-center mt-2">
        <FaUserCircle className="text-gray-500 mr-2" />
        <strong>Company:</strong> {contact.company}
      </p>
      <p className="flex items-center mt-2">
        <FaMapMarkedAlt className="text-gray-500 mr-2" />
        <strong>Address:</strong> {contact.address}
      </p>
      <p className="flex items-center mt-2">
        <FaEnvelope className="text-gray-500 mr-2" />
        <strong>Email:</strong> {contact.email || "N/A"}
      </p>
      <p className="flex items-center mt-2">
        <FaPhone className="text-gray-500 mr-2" />
        <strong>Phone:</strong> {contact.phone || "N/A"}
      </p>
      <p className="flex items-center mt-2">
        <FaTelegramPlane className="text-gray-500 mr-2" />
        <strong>Telegram:</strong> {contact.telegram || "N/A"}
      </p>
      <p className="flex items-center mt-2">
        <strong>Gender:</strong> {contact.gender}
      </p>
      {contact.note && (
        <p className="mt-2">
          <strong>Note:</strong> {contact.note}
        </p>
      )}
    </div>
  );
};

export default ContactDetailCard;
