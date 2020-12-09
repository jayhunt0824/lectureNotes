let netflix = {
    id: 1,
    name: "The Office",
    season1: {
      seasonInfo: {
        episodeInfo: [
          {
            episode: 1,
            episodeName: "Pilot",
          },
          {
            episode: 2,
            episodeName: "Diversity Day",
          },
          {
            episode: 3,
            episodeName: "Health Care",
          },
          {
            episode: 4,
            episodeName: "The Alliance",
          },
          {
            episode: 5,
            episodeName: "Basketball",
          },
        ],
      },
    },
    season2: {},
    season3: {},
  };
 
  
  console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);
  
  let contact = {};
  contact.name = "John";
  contact.phoneNumber = "3183488839";
  console.log(contact);

  contact["notes"] = "Best friend";
  console.log(contact);
   // "" you can give another property or key
   let hasName = contact.hasOwnProperty("name");

delete contact.notes;

console.log(hasName);

console.log(contact);

let newArray = Object.keys(contacts);

console.log(newArray);