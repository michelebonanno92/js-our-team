/*  ``
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
DATI PER ESERCIZIO:

Name            Role                    Image
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
 */

// array del team 


const team = [

    {

      name: ' Wayne Barnett',
      role: '	Founder & CEO	',
      image: 'wayne-barnett-founder-ceo.jpg',
        
    },

    {

      name: ' Angela Caroll',
      role: '	Chief Editor	',
      image: 'angela-caroll-chief-editor.jpg',
        
    },

    {

      name: ' Walter Gordon',
      role: '	Office Manager	',
      image: 'walter-gordon-office-manager.jpg',
        
    },

    {

      name: ' Angela Lopez',
      role: '	Social Media Manager	',
      image: 'angela-lopez-social-media-manager.jpg',
 
    },

    {

      name: ' Scott Estrada',
      role: ' Developer ',
      image: 'scott-estrada-developer.jpg',
        
    },

    {

      name: ' Barbara Ramos ',
      role: '	Graphic Designer ',
      image: 'barbara-ramos-graphic-designer.jpg',
        
    },
 ];

console.log('con questo console log stampiamo l\'array degli oggetti ' , team , typeof team )
 // console.log(team[0]) ;
// console.log(team[1]) ;
// console.log(team[2]) ;
// console.log(team[3]) ;
// console.log(team[4]) ;
// console.log(team[5]) ;






for (let i = 0; i < team.length; i++ ) {
  console.log('questo console log stampiamo attraverso il ciclo definito for tutti le chiave-valore insieme ',team[i]);

// questo invece stampa singolarmente la chiave con il valore corrispondente 
  console.log('name',team[i].name)
  console.log('role',team[i].role)
  console.log('image',team[i].image)

  teamContainer = document.getElementById('team-container');


  teamContainer.innerHTML += `

  <div class="col-12 col-sm-6 col-md-4 mt-4">
      <div class="card">
        <img src="img/${team[i].image}">
        <div class="card-body">
          <h5 class="card-title">${team[i].name}</h5>
          <p class="card-text">${team[i].role}</p>
        </div>
      </div>
  </div>


    `

  // const totalInfo = ` ${team[i].name} - ${team[i]['role']} - ${team[i].image} ` ;
  // console.log('qua provaaaaaaaaaaaaaaaaa stampa in console su stessa riga codice ', totalInfo)
}











