import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useCallback } from "react";
import { services } from "../services";
import ContactCard from "../components/card/ContactCard";
import { useVisitedContacts } from "../hooks/useVisitedContacts";
import { mergeUniqueContacts } from "../utils/helper";
import SearchForm from "../components/template/SearchField";
import LoaderGenerator from "../components/loader/LoaderGenaratoir";
import { useSearchParams } from "react-router-dom";

export default function Landing() {
  const [contactList, setContactList] = useState<IContact[]>([]);
  const { visitedContacts } = useVisitedContacts();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 0;
  const searchTerm = searchParams.get("search");
  const parsedSearchTerm = searchTerm ? JSON.parse(searchTerm) : {};

  const { data, isFetching } = useQuery(
    ["contacts", page, searchTerm],
    async () => {
      const response = await services.contactServices.getContacts(
        page,
        parsedSearchTerm
      );
      return response.data;
    },
    {
      onSuccess: (newData) => {
        const { items } = newData || { items: [] };
        if (
          !parsedSearchTerm.name &&
          !parsedSearchTerm.lastName &&
          !parsedSearchTerm.phone
        ) {
          setContactList((prev) =>
            mergeUniqueContacts([visitedContacts, prev, items])
          );
        } else {
          setContactList((prev) =>
            page === 0 ? items : mergeUniqueContacts([prev, items])
          );
        }
      },
    }
  );

  const totalPages = data ? Math.ceil(data.meta.total / data.meta.limit) : 0;
  const hasNextPage = page < totalPages - 1;

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (
      scrollTop + clientHeight >= scrollHeight - 150 &&
      hasNextPage &&
      !isFetching
    ) {
      setSearchParams((prevParams) => {
        const newPage = page + 1;
        return new URLSearchParams({
          ...Object.fromEntries(prevParams.entries()),
          page: newPage.toString(),
        });
      });
    }
  }, [hasNextPage, isFetching, page, setSearchParams]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div className="w-full p-4 ">
      <div className="sticky top-16 pt-4  px-4 shadow-search  bg-white h-full w-full z-10">
        <SearchForm />
      </div>

      {contactList.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No data to show</p>
      ) : (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-6 mx-auto">
            {contactList.map((contact) => (
              <ContactCard contact={contact} key={contact.id} />
            ))}
            {isFetching && <LoaderGenerator number={10} />}
          </div>

          {!hasNextPage && (
            <p className="text-center text-gray-400 mt-4">
              No more contacts to load.
            </p>
          )}
        </>
      )}
    </div>
  );
}
