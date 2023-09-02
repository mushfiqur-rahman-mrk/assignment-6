
const loadcategory = async()=>{
    const response= await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data= await response.json();
    // console.log(data)
    const categorycontainer=document.getElementById('tabContainer')
    
    data.data.forEach(category => { 
      categorycontainer.innerHTML += `
      <button onclick="handlecategory('${category.category_id}')" class="bg-blue-100 active:bg-red-500 px-6 py-2 rounded-xl "  id="${category.category_id}">${category.category}</button>
      `;    

    });

}
 

let sortdata=[];
const handlecategory = async(id)=>{
  const response= await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
  const data= await response.json();
  // console.log(data)
  sortdata=data.data;
  DisplayCatagoryData(sortdata);
  // console.log(id)
    
}
 
const DisplayCatagoryData = async(data)=>{
  
    const cardContainer = document.getElementById('cardContainer')
    const blank=document.getElementById('blackcontainer');
    blank.innerHTML='';
    cardContainer.textContent='';
    
    data.length ? data.forEach(cardItem =>{
       
      const postdate =parseInt(cardItem.others.posted_date); 
      const datevalue=secondsToHms(postdate)
      cardContainer.innerHTML +=`               
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <div class="relative">  
    <img class="lg:h-48 md:h-48 w-full object-cover object-center" src="${cardItem.thumbnail}" alt="blog">
      <div class="absolute bottom-2 right-2 bg-gray-700 px-2 rounded-lg"><h1 class="text-white text-sm">${datevalue}</h1></div>
      </div>

      <!-- lower part -->
      <div class="p-2">
          <div class="flex flex-row w-full justify-between ">
            <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
            <img  class="h-16 w-16 object-covre rounded-full " src="${cardItem.authors[0].profile_picture}" alt="">
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-bold mb-3">${cardItem.title}</h2>
              <p class="leading-relaxed text-base">${cardItem.authors[0].profile_name} ${cardItem.authors[0].verified ? '<img src="image/fi_10629607.svg" alt="" class="inline"> ' : ''}</p>
              <p>${cardItem.others.views} views</p>

            </div>
          </div>
        </div>

    </div>
   
      `;
      
  }) : blank.innerHTML=`
  <img class="w-68 h-68" src="image/Icon.png" alt="">
  <h1 class="text-4xl font-bold" >Oops!! Sorry, There is no content here</h1>
  `; 
   
}

 
function secondsToHms(postdate) {
  postdate = Number(postdate);
  let hour = Math.floor(postdate / 3600);
  let minute = Math.floor(postdate % 3600 / 60);
  let horDisplay = hour > 0 ? hour + (hour == 1 ? " hrs " : " hrs ") : "";
  let minuteDisplay = minute > 0 ? minute + (minute == 1 ? " min ago" : " min ago") : "";
  return horDisplay + minuteDisplay 
};


function sorting () {
  sortdata.sort((item1,item2)=>{
      return (+item2.others.views.slice(0,-1) - +item1.others.views.slice(0,-1));
  })
  DisplayCatagoryData(sortdata);
}

handlecategory('1000')
loadcategory()