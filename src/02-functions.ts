import {Friend, Colleague, EmailContact} from './myTypes'


const friend1: Friend = {
    name: "Paul Fleming",
    phone: "087-12345",
    age: 25,
  };
  
  const friend2: Friend = {
    name: "Jane Costello",
    phone: "086--12345",
    age: 31,
  };


  export const friends = [friend1, friend2];
  
  function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
  }

  function allOlder(fs: Friend[]) : string[] {
    return fs.map(older);
  }

  console.log(allOlder(friends));


  const colleague1: Colleague = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };

  export const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };

  function highestExtension(cs: Colleague[]) { // Inferred retun type
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

  function addColleague(colleaguesArray: Colleague[], name: string, department: string, email: string) {

    const highestColleague = highestExtension(colleaguesArray);

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

  function findFriends(friendsArray: Friend[], friendfilter: (friend: Friend) => boolean): string[] {
    return friendsArray
      .filter(friendfilter) // Apply the callback function as the filtering condition
      .map(friend => friend.name); // Return the names of the filtered friends
  }
  
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
  console.log(findFriends(friends, (friend) => friend.age < 35));}


  //function to add new interest for friend.
  function addInterest(friend: Friend, newInterest: string): string[] {
    if (!friend.interests) {
      friend.interests = [];
    }

    //"pushes" the friends new interest to the array
    friend.interests.push(newInterest);
  

    //returns intrests
    return friend.interests;
  }
  console.log(addInterest(friends[0], 'Politics'))
  console.log(addInterest(friends[1], 'Travel'));