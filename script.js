const loadPhone = async ()=>{
    const res=await fetch("https://openapi.programming-hero.com/api/phones?search=iphone");
const data = await res.json();
const phones= data.data;
displayPhones(phones)
}

const displayPhones= phones=>{
    // step: 1 :: dom create
    const phoneContainer=document.getElementById('phone-container')
    phones.forEach(phone => {
        
        console.log(phone);
        // step-2 :: create a div
        const phoneCard =document.createElement('div');
        phoneCard.classList= `
        card card-compact w-96 bg-fuchsia-50 shadow-xl `;
        // step-3 :: create innerHTML
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div> 
            </div>
          `
          ;
        //   // step-4 :: append child
        phoneContainer.appendChild(phoneCard);
    })

}







loadPhone();