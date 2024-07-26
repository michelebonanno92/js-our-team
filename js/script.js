/* 
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
      image:  ' wayne-barnett-founder-ceo.jpg	 ',
        
    },

    {

      name: ' Angela Caroll',
      role: '	Chief Editor	',
      image:  '  angela-caroll-chief-editor.jpg	 ',
        
    },

    {

      name: ' Walter Gordon',
      role: '	Office Manager	',
      image:  ' walter-gordon-office-manager.jpg ',
        
    },

    {

      name: ' Angela Lopez',
      role: ' Developer ',
      image:  '  scott-estrada-developer.jpg ',
        
    },

    {

      name: ' Scott Estrada',
      role: '	Social Media Manager	',
      image:  ' angela-lopez-social-media-manager.jpg ',
        
    },

    {

      name: ' Barbara Ramos ',
      role: '	Graphic Designer ',
      image:  '  barbara-ramos-graphic-designer.jpg ',
        
    },
 ];

console.log('team' , team , typeof team )
// console.log(team[0]) ;
// console.log(team[1]) ;
// console.log(team[2]) ;
// console.log(team[3]) ;
// console.log(team[4]) ;
// console.log(team[5]) ;


for (let i = 0; i < team.length; i++ ) {
  console.log(team.length[i]);
}


// teamList = document.getElementById('team-list');



