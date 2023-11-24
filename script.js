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
        
        console.log(phone);
        // step-2 :: create a div
        const phoneCard =document.createElement('div');
        phoneCard.classList= `
        card card-compact  bg-fuchsia-50 shadow-xl `;
        // step-3 :: create innerHTML
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title justify-center">${phone.phone_name}</h2>
          <p class="text-center">If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Details</button>
          </div> 
            </div>
          `
          ;
        //   // step-4 :: append child
        phoneContainer.appendChild(phoneCard);
    })  
    toggleSpinner(false)
}


// search handaler

const handleSearch = () =>{
  toggleSpinner(true);
  const searchField=document.getElementById("search-field");
  const searchText=searchField.value;
  console.log(searchText);
  loadPhone(searchText);
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