let interviewList=[];
let rejectList=[];
let currentStatus='';

let totalCount=document.getElementById("total-count")
let rejectCount=document.getElementById("reject-count")
let interviewCount=document.getElementById("interview-count")
let cardsContainer=document.getElementById("cards-container")
let blank=document.getElementById('blank')

function count(){
totalCount.innerText=cardsContainer.children.length;
interviewCount.innerText=interviewList.length;
rejectCount.innerText=rejectList.length;
}
count()


// console.log(totalCount.innerText);



// console.log(cardsContainer);


function toggle(id){
   

    
    document.getElementById("interview-tab-btn").classList.add('bg-gray-400');
    document.getElementById("all-tab-btn").classList.add('bg-gray-400');
    document.getElementById("reject-tab-btn").classList.add('bg-gray-400');

     document.getElementById("interview-tab-btn").classList.remove('bg-blue-600');
    document.getElementById("all-tab-btn").classList.remove('bg-blue-600');
    document.getElementById("reject-tab-btn").classList.remove('bg-blue-600');

    document.getElementById(id).classList.remove("bg-gray-400");
    document.getElementById(id).classList.add("bg-blue-600");

currentStatus=id;
    if(id=='all-tab-btn'){
        cardsContainer.classList.remove('hidden')
        document.getElementById('blank-job').classList.add('hidden')
         blank.classList.add('hidden')
    }
    else if(id=='interview-tab-btn'){
         cardsContainer.classList.add("hidden")
        
         if(interviewList.length < 1){
             document.getElementById('blank-job').classList.remove('hidden')
         }
         else{
             blank.classList.remove('hidden')
             document.getElementById('blank-job').classList.add('hidden')
               renderInterview();
         }
         
    }
    else if(id=='reject-tab-btn'){
         cardsContainer.classList.add("hidden")
       
         if(rejectList.length<1){
             document.getElementById('blank-job').classList.remove('hidden')
         }
          else{
             blank.classList.remove('hidden')
             document.getElementById('blank-job').classList.add('hidden')
              renderreject();
         }
         
    }
    
     
}


document.getElementById('main-container').addEventListener('click',function(event){
    
     if(event.target.classList.contains('interview-btn')){
        let parentNode=event.target.parentNode.parentNode.parentNode;
          let company = parentNode.querySelector('.company').innerText
        let post = parentNode.querySelector('.post').innerText
        let salary = parentNode.querySelector('.salary').innerText
        let status = parentNode.querySelector('.status').innerText
        let discription = parentNode.querySelector('.discription').innerText  
        // 
 parentNode.querySelector('.status').innerText='interview'
 parentNode.querySelector('.status').classList.add('bg-green-500')
 
      
        let cards={
            company,
            post,
            salary,
            status:'Interview',
            discription

        }
        
        // console.log(cards)
        let  exist=interviewList.find(item => item.company==cards.company)
        if(!exist){
            interviewList.push(cards);
        
        }
         rejectList = rejectList.filter(item => item.company != cards.company)

         if(currentStatus=='reject-tab-btn'){
            renderreject()
         }
    

        count();
      
        
                   
     }

     else if(event.target.classList.contains('reject-btn')){
        let parentNode=event.target.parentNode.parentNode.parentNode;
          let company = parentNode.querySelector('.company').innerText
        let post = parentNode.querySelector('.post').innerText
        let salary = parentNode.querySelector('.salary').innerText
        let status = parentNode.querySelector('.status').innerText
        let discription = parentNode.querySelector('.discription').innerText  
        // 
 parentNode.querySelector('.status').innerText='reject'
 parentNode.querySelector('.status').classList.add('bg-red-500')
      
        let cards={
            company,
            post,
            salary,
            status:"Reject",
            discription

        }
        // console.log(cards)
        let exist=rejectList.find(item => item.company==cards.company)
        if(!exist){
            rejectList.push(cards);
        
        }

        interviewList=interviewList.filter(item=> item.company!= cards.company)
        if(currentStatus=='interview-tab-btn'){
            renderInterview()
        }
    

        count();
       
                   
     }


     else if(event.target.classList.contains('delete')){
         let parentNode=event.target.parentNode.parentNode;
        
         parentNode.remove()
 
             document.getElementById('blank-job').classList.remove('hidden')
        
         
     }
})


function renderInterview() {
    blank.innerHTML = ''

    //
    for (let item of interviewList) {
        // console.log(item);

        let div = document.createElement('div');
        div.className = "p-10 space-y-2.5 bg-[#FFFFFF] shadow rounded-2xl flex justify-between"
        div.innerHTML = `  <div class="space-y-4">
                <h1 class="company text-2xl font-semibold">${item.company}</h1>
            <p class="post text-[#323B49]">${item.post}</p>
            <p class="salary text-[#323B49]">${item.salary}</p>
            <p class="status bg-[#EEF4FF] p-3 max-w-[200px] rounded-2xl bg-green-500">${item.status}</p>
            <p class="discription text-[#323B49]">${item.discription}</p>
            <div class="">
                <button class="interview-btn border-2 border-[#10B981] text-[#10B981] p-2.5 rounded-xl mr-4 ">interview</button>
                <button class="reject-btn border-2 border-[#EF4444] text-[#EF4444] p-2.5 rounded-xl">Rejected</button>
            </div>
            </div>
             <div>
                <button class="text-white rounded-2xl min-w-[80px] p-2.5 text-xl cursor-pointer shadow bg-gray-400 delete hover:bg-red-700">Delete</button>
            </div>`
        blank.appendChild(div)
    }
}
function renderreject() {
    blank.innerHTML = ''

    //
    for (let item of rejectList) {
        // console.log(item);

        let div = document.createElement('div');
        div.className = "p-10 space-y-2.5 bg-[#FFFFFF] shadow rounded-2xl flex justify-between"
        div.innerHTML = `  <div class="space-y-4">
                <h1 class="company text-2xl font-semibold">${item.company}</h1>
            <p class="post text-[#323B49]">${item.post}</p>
            <p class="salary text-[#323B49]">${item.salary}</p>
            <p class="status bg-[#EEF4FF] p-3 max-w-[200px] rounded-2xl bg-red-500">${item.status}</p>
            <p class="discription text-[#323B49]">${item.discription}</p>
            <div class="">
                <button class="interview-btn border-2 border-[#10B981] text-[#10B981] p-2.5 rounded-xl mr-4">interview</button>
                <button class="reject-btn border-2 border-[#EF4444] text-[#EF4444] p-2.5 rounded-xl">Rejected</button>
            </div>
            </div>
             <div>
                <button class="text-white rounded-2xl min-w-[80px] p-2.5 text-xl cursor-pointer shadow bg-gray-400 delete hover:bg-red-700">Delete</button>
            </div>`
        blank.appendChild(div)
    }
}

