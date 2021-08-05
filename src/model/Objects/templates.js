const SnippetAccess = {
  editors: {
    userid1: true,
    userid2: true,
  },

  viewers: {
    userid1: true,
    userid2: true,
  },
  dateUpdated: null,
  dateCreated: null,
};

const User = {
  id: 'userid1',
  editableSnippets: {
    snippetid1: true,
    snippetid2: true,
  },
  viewableSnippets: {
    snippetid1: true,
    snippetid2: true,
  },
  ownedSnippets: {
    snippetid1: true,
    snippetid2: true,
  },
  dateUpdated: null,
  dateCreated: null,
};

const UserInfo = {
  displayName: 'John Doe',
  photoURL: 'https://johndoe.com',
  id: 'userid1',
  userName: 'JohnDoe#1356',
  dateUpdated: null,
  dateCreated: null,
};

const Snippet = {
  title: 'Sorting a list',
  description: 'Lorem Ipsum',
  folder: 'python data structures',
  owner: 'userid1',
  id: 'snippetid1',
  tags: ['data structures', 'algorithms'],
  content: {
    python: 'list.sort()',
  },
  dateUpdated: null,
  dateCreated: null,
};
export default { SnippetAccess, User, UserInfo, Snippet };
