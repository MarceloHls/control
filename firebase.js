

async function start() {

  var config = await {
    apiKey: "AIzaSyC7gkbf5nciQeFz7qF1CvUOJKc6lXPlP9A",
    authDomain: "automacao-451ac.firebaseapp.com",
    databaseURL: "https://automacao-451ac-default-rtdb.firebaseio.com",
    storageBucket: "automacao-451ac.appspot.com"
  };
  await firebase.initializeApp(config);
  // var database = await firebase.database();

  let keys = [];
  let values;

  
  await firebase.database()
    .ref('CASA')
    .once('value')
    .then(async (snapshot) => {
      const objValues = snapshot.val()
      keys = Object.keys(objValues)
      values = objValues
    });
    mostrarDados(keys,values)

 
  setInterval(async ()=>{
    let {tKeys,tValues} = await getValue()
    for(let i = 0; i < tKeys.length; i++){
     let tKey = tKeys[i]
     let cKey = keys[i]
     if(tValues[tKey] != values[cKey]){
      values = tValues
      mostrarDados(keys,values)
      
     }
    }
    
  },500)
}

start()

function mostrarDados(keys,values){
  const body = document.querySelector('.info');
  body.innerHTML = ""
  keys.forEach(key =>{
    
    const value = values[key]
    criarElemento(key,value,body)
  })
}

function criarElemento(key,value,pai){
  const body = document.createElement("div")
  const titulo = document.createElement("p")
  const valor = document.createElement("div")

  body.classList.add("body")

  titulo.innerHTML = key;
  if(key == "Volume"){
      valor.innerText = value;
  }else{
    valor.classList.add(value?"ativo":"naoAtivo")
  }
  
  body.appendChild(titulo)
  body.appendChild(valor)
  pai.appendChild(body)
}


async function getValue() {
  let tKeys = [];
  let tValues;
  await firebase.database().ref('CASA').once('value').then(async snapshot => {
    const objValues = snapshot.val()
    tKeys = Object.keys(objValues)
    tValues = objValues
  })
  return {tKeys,tValues};
}


