
//Opdracht 1 a
let jsonString = '{ "firstname": "Judeska", "email": "judeska@example.com" }';
let jsonData = JSON.parse(jsonString);
console.log(jsonData.firstname); // Judeska
console.log(jsonData.email); // judeska@example.com


//Opdracht 1 b
jsonString = '{ "id": 1, "firstname": "John", "lastname": "Doe", "email": "johndoe@example.com", "birthDate": "1973-01-22", "phone": "(555) 555-1234", "website": "www.johndoe.com" }';
jsonData = JSON.parse(jsonString);
console.log(jsonData.id); // 1
console.log(jsonData.firstname); // John
console.log(jsonData.lastname); // Doe

//Opdracht 2
jsonString = '{ "id": 1, "slug": "lorem-ipsum", "url": "https://jsonplaceholder.org/posts/lorem-ipsum", "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.", "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org", "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org", "status": "published", "category": "lorem", "publishedAt": "04/02/2023 13:25:21", "updatedAt": "14/03/2023 17:22:20", "userId": 1 }';
jsonData = JSON.parse(jsonString);
console.log(jsonData.title); // Lorem ipsum dolor sit amet, consectetur adipiscing elit.
console.log(jsonData.content); // Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.
console.log(jsonData.publishedAt); // 04/02/2023 13:25:21




//Opdracht 3
jsonString = '{ "id": 4, "firstname": "Emily", "lastname": "Davis", "email": "emilydavis@example.com", "birthDate": "1974-11-30", "login": { "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30", "username": "emilydavis", "password": "jsonplaceholder.org", "md5": "c1328472c5794a25723600f71c1b4586", "sha1": "35544a31cc19bd6520af116554873167117f4d94", "registered": "2022-07-10T11:21:20.033Z" }, "address": { "street": "321 Maple Street", "suite": "Apt. 50", "city": "Anytown", "zipcode": "12345-6789", "geo": { "lat": "42.9012", "lng": "-71.5678" } }, "phone": "(555) 555-3456", "website": "www.emilydavis.com", "company": { "name": "GHI Corporation", "catchPhrase": "Your success is our priority", "bs": "Consulting" } }';
jsonData = JSON.parse(jsonString);

console.log(`Email: ${jsonData.email}`);
console.log(`Username: ${jsonData.login.username}`);
console.log(`City: ${jsonData.address.city}`);
console.log(`Company Name: ${jsonData.company.name}`);





//Opdracht 4
jsonString = '{ "id": 11, "postId": 3, "userId": 2, "comment": "Cras convallis ipsum eget sapien hendrerit dignissim." }';
jsonData = JSON.parse(jsonString);
console.log(jsonData);




//Opdracht 5
jsonString = '[{"id":1,"postId":1,"userId":1,"comment":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":2,"postId":1,"userId":1,"comment":"Nulla quis libero vel orci rutrum suscipit."},{"id":3,"postId":3,"userId":2,"comment":"Cras ac elit sit amet mi placerat bibendum."}]';
jsonData = JSON.parse(jsonString);
for (const comment of jsonData) {
  console.log(comment.comment);
}



//Opdracht 6



//Opdracht 7
const object = {
    name: 'John',
    age: 20,
    marks: {
      science: 70,
      math: 75
    }
  };
  
  jsonData = JSON.stringify(object);
  
  console.log(jsonData);
  



//Opdracht 8

const array = [
    {
      name: 'Wolverine',
      age: 38,
      marks: {
        science: 20,
        math: 15
      }
    },
    {
      name: 'Xavier',
      age: 64,
      marks: {
        science: 95,
        math: 90
      }
    },
    {
      name: 'Magneto',
      age: 68,
      marks: {
        science: 90,
        math: 85
      }
    }
  ];
  
  jsonData = JSON.stringify(array);
  
  console.log(jsonData);
  

