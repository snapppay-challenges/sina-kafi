export const useVisitedContacts = () => {
  let visitedContacts: IContact[] =
    JSON.parse(
      localStorage.getItem("visitedContacts")
        ? localStorage.getItem("visitedContacts")
        : JSON.parse("null")
    ) || [];

  const addVisitedContact = (contact: IContact) => {
    visitedContacts = [
      contact,
      ...visitedContacts.filter((c) => c.id !== contact.id),
    ].slice(0, 4);
    localStorage.setItem("visitedContacts", JSON.stringify(visitedContacts));
  };

  return { visitedContacts, addVisitedContact };
};
