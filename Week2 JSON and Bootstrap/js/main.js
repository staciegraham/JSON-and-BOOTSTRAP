// js/main.js
document.addEventListener("DOMContentLoaded", function () {

  const singers = [
    { 
      name: "Madonna", 
      bestSong: "Into the Groove", 
      hometown: "Bay City, Michigan",  
    },
    { 
      name: "Michael Jackson", 
      bestSong: "Billie Jean", 
      hometown: "Gary, Indiana", 
      
    },
    { 
      name: "Cyndi Lauper", 
      bestSong: "Girls Just Want to Have Fun", 
      hometown: "Brooklyn, Newyork",   
    },
    { 
      name: "Prince", 
      bestSong: "Purple Rain", 
      hometown: "Minneapolis, Minnesota", 
    },
    { 
      name: "Whitney Houston", 
      bestSong: "How Will I Know", 
      hometown: "Newark, New Jersey",  
    }
  ];

  const tableBody = document.querySelector("#singerTable tbody");
  
  // Populate Bootstrap table
  singers.forEach((singer) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${singer.name}</td>
      <td>${singer.bestSong}</td>
      <td>${singer.hometown}</td>
    `;
    tableBody.appendChild(row);
  });

 

});