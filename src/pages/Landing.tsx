import ContactCard from "../components/card/ContactCard";
import SearchForm from "../components/template/SearchField";
import LoaderGenerator from "../components/loader/LoaderGenaratoir";
import useLandingLogic from "../hooks/useLandingLogic";

export default function Landing() {
  const { contactList, hasNextPage, isFetching } = useLandingLogic();
  return (
    <div className="w-full p-4 ">
      <div className="sticky top-16 pt-4  px-4 shadow-search  bg-white h-full w-full z-10">
        <SearchForm />
      </div>

      {!isFetching && contactList.length === 0 ? (
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
