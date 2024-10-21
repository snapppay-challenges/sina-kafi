import React from "react";
import { useNavigate } from "react-router-dom";
import LazyImage from "../template/LazyImage";

const ContactCard = React.memo(({ contact }: { contact: IContact }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/contact/${contact.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-6  w-full flex-shrink-0 transition-transform transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <LazyImage
        placeholder="/pwa/android-48-48.png"
        src={contact.avatar}
        alt={`${contact.first_name} ${contact.last_name}`}
        className="w-24 h-24 rounded-full mx-auto mb-4 aspect-auto block"
      />
      <h3 className="text-xl font-semibold text-center">
        {contact.first_name} {contact.last_name}
      </h3>
      <span className="mt-2">
        <strong>Email:</strong>
        <p className="max-w-full truncate"> {contact.email || "N/A"}</p>
      </span>
      <p className="mt-2">
        <strong>Phone:</strong> {contact.phone || "N/A"}
      </p>
    </div>
  );
});

export default ContactCard;
