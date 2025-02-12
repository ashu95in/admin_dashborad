export const hitDateApi = async () => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            "id": 1,
            "title": "Ramu",
            "des": "500 earn today, level Knight"
          },
          {
            "id": 2,
            "title": "Shyam",
            "des": "300 earn today, level Warrior"
          },
          {
            "id": 3,
            "title": "Mohan",
            "des": "700 earn today, level Champion"
          }
        ]);
      }, 1000);
    });
  };