function result(){
   // preventDefault();
   let detail= {
      email:(document.getElementById("email").value),
      pass:(document.getElementById("pass").value)
   }

   let count;
   let val=0;
   let obj = JSON.parse(localStorage.getItem("login"))||[];

      // console.log(obj[0]["email"])
  for(let i=0;i<obj.length;i++){
      if(obj[i]["email"]===detail.email && obj[i]["pass"]===detail.pass){
         alert("Login Sucess");
         count = detail.email;
         localStorage.setItem("count",count)
         location.href = "/HTML/home.html"
         v++;
      }
  }
  if(val==0){
   alert("Invalid Email or password")
  }
}

function register(){
   let detail= {
      email:(document.getElementById("email").value),
      pass:(document.getElementById("pass").value)
   }

   let arr = JSON.parse(localStorage.getItem("login"))||[];
   let count=0;
   let val;
   // arr.push(detail)
   arr.map(object=>{
      if(object.email===detail.email){
            count++;
            alert("Email Already Exist")
      }
   })
   if(count==0){
      arr.push(detail)

      localStorage.setItem("login",JSON.stringify(arr));
      alert("Registration Success")
      val = detail.email;
      localStorage.setItem("count",val)
      location.href = "/HTML/home.html"
   }
   
   
   
}