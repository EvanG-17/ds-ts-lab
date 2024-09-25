import {Friend, Colleague, ColleagueHistory } from './myTypes'

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

  function highestExtension(cs: Colleague[]): number {
    return Math.max(...cs.map(c => c.contact.extension));
  }

  function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    const newExtension = highestExtension(cs) + 1;
    cs.push({
      name,
      department,
      contact: {
        email,
        extension: newExtension,
      },
    });
  }

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));