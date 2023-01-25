
import './App.css';
import Profile from './Profil/Profile';
import Pic from './Cartoonify.png'

function App() {
  const FullName="Ala Eddine Chakroun" ;
  const Bio=" Je suis 23 ans , j'ai une licence fondamentale en gestion spécialité finance et je suis un étudiant en 2 émé année master de recherche en finance a la faculté des sciences économiques et gestion sousse" ;
  const Profession= "etudiant" ;
  const AlertMe=()=>{
    alert("le nom de l'utilisateur du profil")
  };

  
  return (
    <div className="App">
      <img src={Pic} width="300px"/>
     
     <Profile FullName={FullName} Bio={Bio} Profession={Profession} alert={AlertMe} />

    </div>
  );
}

export default App;
