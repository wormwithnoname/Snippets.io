const SnippetAccess = {
  editors: {
    userid1: true,
    userid2: true,
  },
  viewers: {
    userid1: true,
    userid2: true,
  },
};

const User = {
  id: 'userid1',
  editableSnippets: {
    // snippetid1: true,
    // snippetid2: true,
  },
  viewableSnippets: {
    // snippetid1: true,
    // snippetid2: true,
  },
  ownedSnippets: {
    // snippetid1: true,
    // snippetid2: true,
  },
};

const UserInfo = {
  displayName: 'John Doe',
  photoURL: 'https://johndoe.com',
  id: 'userid1',
  userName: 'JohnDoe#1356',
};

const Snippet = {
  title: 'Sorting a list',
  description: 'Lorem Ipsum',
  folder: 'python data structures',
  owner: 'userid1',
  id: 'snippetid1',
  tags: [
    // 'data structures', 'algorithms'
  ],
  content: {
    // python: 'list.sort()',
  },
};
export default { SnippetAccess, User, UserInfo, Snippet };
