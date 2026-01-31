<?php
class User {
  // Properties
  //public $id;
  public $nom;
  public $prenom;
  //public $role;
  public $email;
  public $pseudo;
  //public $avatar;
  public $naissance;
  //public $telephone;
  //public $groupe;
  //public $motdepasse;
  //public $adresse1;
  //public $adresse2;
  //public $codepostal;
  //public $description;
  //public $specs;
  //public $animaux;
  //public $intérêts;
  //public $vehicule;

  // Costructor
  function __construct($nom, $prenom, $email) {
    $this->nom = $nom;
    $this->prenom = $prenom;
    $this->email = $email;
  }


  // Method to set the properties
  function set_details($nom, $prenom) {
    $this->nom = $nom;
    $this->prenom = $prenom;
  }

  // Method to display the properties
  function get_details() {
    echo "<p>Nom: " . $this->nom . ". Prenom: " . $this->prenom .".</p><br>";
  }

  function get_nom() {
    return $this->nom;
  }

  function get_prenom() {
    return $this->prenom;
  }
}

class Mission {
  public $id;
  public $createur;
  public $titre;
  public $categorie;
  public $date;
  public $heure;
  public $duree;
  public $desc;
  public $vehicule;
  public $endroit;
  public $status;

  function __construct($createur,$titre,$categorie,$duree,$desc,$vehicule,$endroit) {
    $this->createur = $createur;
    $this->titre = $titre;
    $this->categorie = $categorie;
    $this->duree = $duree;
    $this->desc = $desc;
    $this->vehicule = $vehicule;
    $this->endroit = $endroit;
    $this->date = date("d/m/y");
  }

  function get_details() {
    echo "<p>Titre: " . $this->titre . ".";
    echo "<p>Créateur: " . $this->createur->get_prenom() . " " . $this->createur->get_nom() .".</p><br>";
    echo "<p>Categorie: " . $this->categorie . ".";
  }
}

$andrey = new User("Doe","Andrey","andrey.doe@test.fr");
$andrey->get_details();

$mission1 = new Mission($andrey,"Missin pour Andrey","promenade",5,"Ceci est une mission test",false,"Dunkerque");
$mission1->get_details();

json_encode($mission1);











?>