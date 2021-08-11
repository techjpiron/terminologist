const toArray = (data) => {
  if (!data) {
    return [];
  }

  if (Array.isArray(data)) {
    return data;
  }
  return Array(data);
};

export default toArray;
