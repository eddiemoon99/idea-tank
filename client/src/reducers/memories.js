export default (memories = [], action) => {
  switch (action.type) {
    case 'DELETE':
      return memories.filter((memory) => memory._id !== action.payload);
    case 'UPDATE':
    case 'LIKE':
      return memories.map((memory) =>
        memory?._id === action?.payload?._id ? action?.payload : memory
      );
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...memories, action.payload];
    default:
      return memories;
  }
};
