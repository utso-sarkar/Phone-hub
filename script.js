const loadPhone = async (searchText) => {
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
const data = await res.json();
const phones= data.data;
displayPhones(phones);
}

const displayPhones= phones=>{
    // step: 1 :: dom create
    const phoneContainer=document.getElementById('phone-container')
    // to clear phone container 
    phoneContainer.textContent=''



    phones.forEach(phone => {
        
        // console.log(phone);
        // step-2 :: create a div
        const phoneCard =document.createElement('div');
        phoneCard.classList= `
        card card-compact  bg-fuchsia-50 shadow-xl `;
        // step-3 :: create innerHTML
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body ">
          <h2 class="card-title justify-center">${phone.phone_name}</h2>
          <p class="text-center">If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Details</button>
          </div> 
            </div>
          `
          ;
        //   // step-4 :: append child
        phoneContainer.appendChild(phoneCard);
    })  
    toggleSpinner(false)
}


// search handalar

const handleSearch = () =>{
  toggleSpinner(true);
  const searchField=document.getElementById("search-field");
  const searchText=searchField.value;
  // console.log(searchText);
  loadPhone(searchText);
}








// modal section create 
const showDetails = async(id)=>{
  console.log("Show details",id);
  const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}
  `)
  const data = await res.json();
  const phone=data.data;
  phone_details(phone)

}
// show the modal 
const phone_details =(phone)=>{
  console.log(phone);
  // const phoneName= document.getElementById("phone-name");
  // phoneName.innerText=phone.name;
  const modalContainerInfo=document.getElementById('modal-container-information');
  modalContainerInfo.innerHTML=`
    <p><span>Phone Model:</span>${phone.name}</p>
    <img src ="${phone.image}"/>
    <p class="text-xl"><span>Phone Storage:</span>${phone.mainFeatures.storage}</p>
    <p class="text-xl"><span>Phone Display :</span>${phone.mainFeatures.displaySize}</p>
    <p class="text-xl"><span>Phone Release Date:</span>${phone.releaseDate}</p>
    <p class="text-xl"><span>USB:</span>${phone.others.USB}</p>
    <p class="text-xl"><span>Wifi:</span>${phone.others.WLAN}</p>
    <p class="text-xl"><span>Brand:</span>${phone.brand}</p>

  
  `
  
  



  



  // show modal 
  my_modal_5.showModal();
}



const toggleSpinner=(isLoading)=>{
  const loadingTgl = document.getElementById("loading-spinner");
  if (isLoading){
    loadingTgl.classList.remove("hidden")
  }
  else{
    loadingTgl.classList.add("hidden");
  }
}




// loadPhone();