import { useCallback, useEffect, useState } from "react";
import { useVisitedContacts } from "./useVisitedContacts";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { mergeUniqueContacts } from "../utils/helper";
import { services } from "../services";

const useLanding = () => {
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
        const noSearchTerm =
          !parsedSearchTerm.name &&
          !parsedSearchTerm.lastName &&
          !parsedSearchTerm.phone;

        setContactList((prev) =>
          mergeUniqueContacts([
            noSearchTerm ? visitedContacts : [],
            page === 0 ? [] : prev,
            items,
          ])
        );
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

  return { contactList, hasNextPage, isFetching };
};

export default useLanding;
