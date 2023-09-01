
// const response= fetch(`https://openapi.programming-hero.com/api/videos/categories`)
// const data= response.json()
// const category = displayCategory(data.data);

 
const handlecategory = async()=>{
    const response= await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data= await response.json();
    let use = data.data; 
    const category = displayCategory(data.data);    
}
 
const displayCategory=(category)=>{
    for(item of category){
        // console.log(category);
        // let catitem=item.category_id;
        // console.log(catitem)
        const categorycontainer=document.getElementById('tabContainer')
        const div = document.createElement('div')
        div.innerHTML=`
        <div class="tabs rounded-md px-4 py-2">
        <button id="acbtn" onclick="loadCatagoryData('${item.category_id}')" class="bg-blue-100 active:bg-red-500 px-6 py-2">
        <a class="font-bold text-md ">${item.category}</a> 
        </button>        
    </div>
        
        `;
        categorycontainer.appendChild(div);
    } 
}

// copy
let sortdata=[];
let result1 = sortdata.d
let result = sortdata.map(a => a.category);
console.log(result1)
const handlesorting = async()=>{
  const response= await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
  const data= await response.json();
  console.log(data)
  sortdata.push(data.data);
  
    
}
console.log(sortdata);

const sorting=(sortdata)=>{
  console.log(sortdata);
    sortdata.forEach(item =>{
        // console.log(categorys);
        let items=item.category_id;
        console.log(items)
        

        const sortdata =async(items)=>{
          // console.log(idno)
          // const id = catagoryid
          const response=await fetch(`https://openapi.programming-hero.com/api/videos/category/${items}`)
          const data = await response.json();
        
          const cardContainer = document.getElementById('cardContainer')
          cardContainer.textContent='';
          const sorted =data.data.sort((a, b) => parseFloat(b.others.views) - parseFloat(a.others.views));
        
          sorted.forEach(cardItem=>{
             console.log(cardItem)
            const div = document.createElement('div')
            
             
            const postdate =parseInt(cardItem.others.posted_date); 
            function secondsToHms(postdate) {
              postdate = Number(postdate);
              let hour = Math.floor(postdate / 3600);
              let minute = Math.floor(postdate % 3600 / 60);
              // let second = Math.floor(postdate % 3600 % 60);
            
              let horDisplay = hour > 0 ? hour + (hour == 1 ? " hrs " : " hrs ") : "";
              let minuteDisplay = minute > 0 ? minute + (minute == 1 ? " min ago" : " min ago") : "";
              // let secondDisplay = second > 0 ? second + (second == 1 ? " sec ago" : " sec ago") : "";
              return horDisplay + minuteDisplay 
            };
        
            const datevalue=secondsToHms(postdate)
            div.innerHTML=`               
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
        
            
            `;cardContainer.appendChild(div);
            // const removeK= viewsnumber.replace(/k/g , '');
            
            
        
        
            // console.log(sorttest)
            // console.log(viewsnumber);
            // console.log(typeof(viewsnumber));
        
          })
          // console.log(typeof(data.data[1].others.views))
         
        }





    }) 

}


// const idno =(num)=>{
//   let processing=num*1; 
// }

// active btn
// const clickbtn=()=>{
//   const categorybtn =document.getElementById('acbtn');
//   document.querySelector('.active')?.classList.remove('active');
//   categorybtn.classList.add('active');
// }



// load catagory data

const loadCatagoryData =async(item)=>{
  console.log(item);
    const response=await fetch(` https://openapi.programming-hero.com/api/videos/category/${item}`)
    const data = await response.json();
    console.log(data.data )

    console.log(data.data);
    const cardContainer = document.getElementById('cardContainer')
    const blank=document.getElementById('blackcontainer');
    blank.innerHTML='';
    cardContainer.textContent='';
    
    data.status ? data.data.forEach(cardItem =>{
      const div = document.createElement('div')
     
      const postdate =parseInt(cardItem.others.posted_date); 
      function secondsToHms(postdate) {
        postdate = Number(postdate);
        let hour = Math.floor(postdate / 3600);
        let minute = Math.floor(postdate % 3600 / 60);
        // let second = Math.floor(postdate % 3600 % 60);
      
        let horDisplay = hour > 0 ? hour + (hour == 1 ? " hrs " : " hrs ") : "";
        let minuteDisplay = minute > 0 ? minute + (minute == 1 ? " min ago" : " min ago") : "";
        // let secondDisplay = second > 0 ? second + (second == 1 ? " sec ago" : " sec ago") : "";
        return horDisplay + minuteDisplay 
      };

      const datevalue=secondsToHms(postdate)
      div.innerHTML=`               
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
 
      
      `;cardContainer.appendChild(div);
      
  }) : blank.innerHTML=`
  <img class="w-68 h-68" src="image/Icon.png" alt="">
  <h1 class="text-4xl font-bold" >Oops!! Sorry, There is no content here</h1>
  `; 
   
   
    // console.log(data.data[0].title,'ok',item);
}


//  sorting

// const sorting =async(idno)=>{
//   // console.log(idno)
//   const id = catagoryid
//   const response=await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
//   const data = await response.json();

//   const cardContainer = document.getElementById('cardContainer')
//   cardContainer.textContent='';
//   const sorted =data.data.sort((a, b) => parseFloat(b.others.views) - parseFloat(a.others.views));

//   sorted.forEach(cardItem=>{
//      console.log(cardItem)
//     const div = document.createElement('div')
    
     
//     const postdate =parseInt(cardItem.others.posted_date); 
//     function secondsToHms(postdate) {
//       postdate = Number(postdate);
//       let hour = Math.floor(postdate / 3600);
//       let minute = Math.floor(postdate % 3600 / 60);
//       // let second = Math.floor(postdate % 3600 % 60);
    
//       let horDisplay = hour > 0 ? hour + (hour == 1 ? " hrs " : " hrs ") : "";
//       let minuteDisplay = minute > 0 ? minute + (minute == 1 ? " min ago" : " min ago") : "";
//       // let secondDisplay = second > 0 ? second + (second == 1 ? " sec ago" : " sec ago") : "";
//       return horDisplay + minuteDisplay 
//     };

//     const datevalue=secondsToHms(postdate)
//     div.innerHTML=`               
//   <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//   <div class="relative">  
//   <img class="lg:h-48 md:h-48 w-full object-cover object-center" src="${cardItem.thumbnail}" alt="blog">
//     <div class="absolute bottom-2 right-2 bg-gray-700 px-2 rounded-lg"><h1 class="text-white text-sm">${datevalue}</h1></div>
//     </div>

//     <!-- lower part -->
//     <div class="p-2">
//         <div class="flex flex-row w-full justify-between ">
//           <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
//           <img  class="h-16 w-16 object-covre rounded-full " src="${cardItem.authors[0].profile_picture}" alt="">
//           </div>
//           <div class="flex-grow">
//             <h2 class="text-gray-900 text-lg title-font font-bold mb-3">${cardItem.title}</h2>
//             <p class="leading-relaxed text-base">${cardItem.authors[0].profile_name} ${cardItem.authors[0].verified ? '<img src="image/fi_10629607.svg" alt="" class="inline"> ' : ''}</p>
//             <p>${cardItem.others.views} views</p>

//           </div>
//         </div>
//       </div>

//   </div>

    
//     `;cardContainer.appendChild(div);
//     // const removeK= viewsnumber.replace(/k/g , '');
    
    


//     // console.log(sorttest)
//     // console.log(viewsnumber);
//     // console.log(typeof(viewsnumber));

//   })
//   // console.log(typeof(data.data[1].others.views))
 
// }




handlesorting();
loadCatagoryData(1000);
handlecategory();