import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { services } from "../services";
import { useVisitedContacts } from "../hooks/useVisitedContacts";
import ContactDetailCard from "../components/card/ContactDetailCard";
import Spinner from "../components/loader/spiner";

const ContactDetail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery(
    [`contacts_detail_${id}`, id],
    () =>
      services.contactServices
        .getContactDetails(Number(id))
        .then((res) => res.data),
    {
      enabled: !!id,
    }
  );

  const { addVisitedContact } = useVisitedContacts();

  useEffect(() => {
    if (data) addVisitedContact(data);
  }, [data, addVisitedContact]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {data ? (
        <div className="p-4 max-w-2xl mx-auto">
          <ContactDetailCard contact={data} />
        </div>
      ) : (
        error && (
          <div className="text-center mt-4">
            <h2 className="text-lg text-red-500">
              Error fetching contact details
            </h2>
          </div>
        )
      )}
    </>
  );
};

export default ContactDetail;
