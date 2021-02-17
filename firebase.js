
  
  var config = {
    apiKey: "AIzaSyC7gkbf5nciQeFz7qF1CvUOJKc6lXPlP9A",
    authDomain: "automacao-451ac.firebaseapp.com",
    databaseURL: "https://automacao-451ac-default-rtdb.firebaseio.com",
    storageBucket: "automacao-451ac.appspot.com"
  };
  firebase.initializeApp(config);
  var database = firebase.database();



  // var ref = firebase.database().ref("CASA");
  // ref.orderByKey().endAt("L1").on("child_added", function(snapshot) {
  //   console.log(snapshot.val());
  // });

  
  firebase.database().ref('CASA').once('value').then((snapshot) => {
    // console.log(snapshot.val().L1)
    // console.log(snapshot.val().L2)
    // console.log(snapshot.val().L3)
    // console.log(snapshot.val().L4)
    // console.log(snapshot.val().Volume)
   
      
      setTimeout( "Time", 5000,window.location.reload() ),500;
      
      p1.append("Led1:"+snapshot.val().L1);
      p2.append("Led2:"+snapshot.val().L2);
      p3.append("Led3:"+snapshot.val().L3);
      p4.append("Led4:"+snapshot.val().L4);
      v1.append("Volume:"+snapshot.val().Volume);
       setInterval(5000000);
        
      // ...
    });
  
  

   