export const mergeUniqueContacts = <T extends { id: number }>(
  arrays: T[][]
): T[] => {
  const uniqueContacts: T[] = [];
  const seenIds = new Set<number>();
  for (const array of arrays) {
    for (const contact of array) {
      if (!seenIds.has(contact.id)) {
        seenIds.add(contact.id);
        uniqueContacts.push(contact);
      }
    }
  }

  return uniqueContacts;
};
