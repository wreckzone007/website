window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
     navbar.style.backgroundColor="#dbdbdb"
    navbar.classList.add("sticky")
   
  } else {
    navbar.style.backgroundColor="transparent";
    navbar.classList.remove("sticky");
    
  }
}
function rotateImage() {
  var img = document.getElementById('myLogo');
  img.style.transform = 'rotate(180deg)';
}

// Firebase configs
var firebaseConfig = {
  apiKey: "AIzaSyCXhPEF8OTZCiU-I5g_C63xo8tAooWnYJ0",
  authDomain: "website-resume-c8412.firebaseapp.com",
  databaseURL: "https://website-resume-c8412.firebaseio.com",
  projectId: "website-resume-c8412",
  storageBucket: "website-resume-c8412.appspot.com",
  messagingSenderId: "1095565816028",
  appId: "1:1095565816028:web:8d18df43d6adc8aa7a8419",
  measurementId: "G-700F8FETDB"
};

  firebase.initializeApp(firebaseConfig);
//firebase.analytics();
// Initialize Firebase
  //var defaultProject = firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  db.collection("educations").get().then(function(snapshot){
    snapshot.forEach(function(doc){
      readEducation(doc);
        })
});
 
    function readEducation(doc){

      let parent = document.getElementById("schoolsContainer");
      let data = doc.data();

      let school = document.createElement("div");
      school.classList.add("school")
      
      let img1 = document.createElement("img");
      let div2 = document.createElement("div");
      div2.setAttribute("class", "schoolInfo");
      let span1 = document.createElement("span");
      span1.setAttribute("id", "schoolName");
      let span2 = document.createElement("span");
      span2.setAttribute("id", "course");
      let span3 = document.createElement("span");
      span3.setAttribute("id", "schoolYear");
      let p1 = document.createElement("p");
      p1.setAttribute("id", "awards");
      p1.classList.add("awards")
      
      if(data.imgFile == null)
      {
        img1.setAttribute("src", "img/school.png");
      }
      else{
        img1.setAttribute("src", "img/" + data.imgFile);
      }
      
      span1.innerHTML = data.school
      span2.innerHTML = data.degree
      span3.innerHTML = data.startYear + "-" + data.endYear
      p1.innerHTML = data.award

      console.log(span1)
      console.log(span2)
      console.log(span3)
      console.log(p1)
      
      console.log("image src: " + img1.src);
      school.appendChild(img1)
      console.log("img1")
     
      console.log("div2")
      div2.appendChild(span1)
     
      div2.appendChild(span2)
      div2.appendChild(span3)
      div2.appendChild(p1)
      console.log("p1")
      school.appendChild(div2)
      console.log(div2)
      parent.appendChild(school)
      let educHeight = document.getElementById("educParty").offsetHeight;
 
      document.getElementById("particles-js").style.height = parseInt(educHeight) + 'px' ;
      document.getElementById("education").style.height = parseInt(educHeight) + 'px' ;
      
    }
  
    db.collection("organizations").get().then(function(snapshot){
      snapshot.forEach(function(doc){
        readOrganization(doc);
          })
  });
   
      function readOrganization(doc){
  
        let parent = document.getElementById("orgContainer");
        let data = doc.data();
  
        let org = document.createElement("div");
        org.classList.add("org")
        
        let img1 = document.createElement("img");
        let div2 = document.createElement("div");
        div2.setAttribute("class", "orgInfo");
        let span1 = document.createElement("span");
        span1.setAttribute("id", "orgName");
        let span2 = document.createElement("span");
        span2.setAttribute("id", "position");
        let span3 = document.createElement("span");
        span3.setAttribute("id", "schoolYear");
        let p1 = document.createElement("p");
        p1.setAttribute("id", "description");
       
        if(data.imgFile == null)
      {
        img1.setAttribute("src", "img/org.png");
      }
      else{
        img1.setAttribute("src", "img/" + data.imgFile);
      }
        
        span1.innerHTML = data.name
        span2.innerHTML = data.position
        span3.innerHTML = data.year_start + "-" + data.year_end
        p1.innerHTML = data.description
  
        console.log(span1)
        console.log(span2)
        console.log(span3)
        console.log(p1)
        
        console.log("image src: " + img1.src);
        org.appendChild(img1)
        console.log("img1")
       
        console.log("div2")
        div2.appendChild(span1)
       
        div2.appendChild(span2)
        div2.appendChild(span3)
        div2.appendChild(p1)
        console.log("p1")
        org.appendChild(div2)
        console.log(div2)
        parent.appendChild(org)
        
      }
    
      db.collection("others").get().then(function(snapshot){
        snapshot.forEach(function(doc){
          readAboutMe(doc);
            })
    });
     
        function readAboutMe(doc){
    
          let parent = document.getElementById("intro");
          let data = doc.data();
    
          let aboutMe= document.createElement("div");
          aboutMe.classList.add("section")
          aboutMe.classList.add("container")
          aboutMe.setAttribute("id", "aboutMe");
          
          let h3 = document.createElement("h3");
          h3.classList.add("text-center")
          let p = document.createElement("p");
          p.setAttribute("id","aboutMeContent");
          p.classList.add("text")

        
          let img = document.createElement("img");
         

          let socMeds = document.createElement("div")
          socMeds.classList.add("socMeds");
          let li = document.createElement("a")
          let i1 = document.createElement("i")
          let git = document.createElement("a")
          let i2 = document.createElement("i")
          let fb = document.createElement("a")
          let i3 = document.createElement("i")

          i1.classList.add("linkedin")
          i1.classList.add("icon")
          i1.classList.add("huge")
          
          i2.classList.add("github")
          i2.classList.add("icon")
          i2.classList.add("huge")
                   
          i3.classList.add("facebook")
          i3.classList.add("f")
          i3.classList.add("icon")
          i3.classList.add("huge")
                     
          h3.innerHTML = data.name
          p.innerHTML = data.aboutMe
          img.setAttribute("src", "img/myPic.png");
          li.setAttribute("href", data.linkedin)
          git.setAttribute("href", data.github)
          fb.setAttribute("href", data.facebook)
         
          aboutMe.appendChild(h3)
          aboutMe.appendChild(p)
          

          socMeds.appendChild(li)
          socMeds.appendChild(i1)
          socMeds.appendChild(git)
          socMeds.appendChild(i2)
          socMeds.appendChild(fb)
          socMeds.appendChild(i3)

          aboutMe.appendChild(socMeds)
          aboutMe.appendChild(img)
     
          console.log(aboutMe)
     
          parent.appendChild(aboutMe)
          // parent.appendChild(socMeds)
          
        }

        db.collection("hobbies").get().then(function(snapshot){
          snapshot.forEach(function(doc){
            readHobbies(doc);
              })
      });
       
          function readHobbies(doc){
      
            let parent = document.getElementById("hobbiesContainer");
            let data = doc.data();
            
            let hobby= document.createElement("div");
            hobby.classList.add("hobby")
            
            let div1 = document.createElement("div");
            div1.classList.add("hobbiesIcons")
            let i1 = document.createElement("i");
            i1.classList.add("icon");
            i1.classList.add("huge");
            let span = document.createElement("span");
            span.classList.add("hobbiesName");
            
            if (data.icon == null)
            {
              div1.setAttribute("id", "defaultHobby");
              i1.classList.add("smile");
              i1.classList.add("outline");
            }
            else if(data.icon == "basketball")
            {
              div1.setAttribute("id", data.hobby);
              i1.classList.add(data.icon);
              i1.classList.add("ball");
            }
            else{
              div1.setAttribute("id", data.hobby);
              i1.classList.add(data.icon);
            }
            span.innerHTML = data.hobby
           
            div1.appendChild(i1)
          
            
            hobby.appendChild(div1)
            hobby.appendChild(span)
            parent.appendChild(hobby)
            console.log(hobby)
          }

        db.collection("works").get().then(function(snapshot){
            snapshot.forEach(function(doc){
              readProjects(doc);
                })
        });
         
            function readProjects(doc){
        
              let parent = document.getElementById("projectsContainer");
              let data = doc.data();
              
              let project= document.createElement("div");
              project.classList.add("project")
              
              let img = document.createElement("img")
              let span = document.createElement("span")
              span.setAttribute("id", "projectName")
              let span1 = document.createElement("span")
              span1.classList.add("description");
              span1.setAttribute("id","projectDescription");

              if(data.imgFile == null)
              {
                img.setAttribute("src", "img/project.png")
              }
              else{
                img.setAttribute("src", "img/" + data.imgFile)
              }
              span.innerHTML = data.name
              span1.innerHTML = data.description
              
              project.appendChild(img)
              project.appendChild(span)
              project.appendChild(span1)
              
              parent.appendChild(project)
              console.log(project)
            }
    /*
    //adding into organizations
    db.collection("organizations").add({
        name: "lamb",
        position: "docupub",
        year_end: 2019,
        year_start: 2018
    })
  
    .then(function(docRef) {
        console.log("Item added with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        
    });
//  firebase.analytics();
    
    
    //deleting organizations
    db.collection("organizations").doc("C0Ht0iDI7ezFQMN6PCzx").delete().then(function(){
        console.log("Item deleted");
    }).catch(function(err){                     
        console.log("error in deleting item: " + err);
    }); */
    
    
     
   
    // var email = 'courtney.ngo@dlsu.edu.ph';
    // var password = 'abcd1234'; 
    // firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
    //     console.log("user signed in");
        
    //     var user = firebase.auth().currentUser;
    //     if(user != null){
    //         console.log(user.email)
            
    //     }
    // }).catch(function(err){
    //     if(err.code == "auth/wrong-password"){
    //         alert("wrong password")
    //     }
    //         else{
    //             alert(err.message);
    //         }
    // });