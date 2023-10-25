import React from "react";
import Header from "../components/Header";
import Job from "../components/Job";

const Pro = () => {
  return (
    <div>
      <Header />
      <section className="container-fluid d-flex justify-content-around align-items-center">
        <div className="col-4 d-flex flex-wrap justify-content-around align-items-center">
          <Job
            title="Alternance Golf La Gardiole"
            description={[
              "Community Manager",
              "Recherche de partenariat",
              "Organisation d'évènements",
              "Gestion du club et vente",
              "Accueil et présentation du parcours",
              "Gestion du practice",
            ]}
            date="2023-2024"
            lieu="Fabrègues"
            chalkId="1"
            highlightId="yellow"
          />
          <Job
            title="Alternance Intersport Trifontaine"
            description={[
              "Gestion des rayons textiles",
              "Responsable du pôle musculation et zone évènementiel du magasin",
              "Optimisation du magasin (implantation et merchandizing des articles)",
              "Maîtrise de l'univers chaussures, basket, musculation et textile",
              "Hôtesse de caisse",
              "Accueil et satisfaction client",
              "Accompagnement client",
              "Développement de la fidélisation client",
              "Proposition d'axe de développement",
              "Préparation des soldes",
              "Mise en place des opérations commerciales",
            ]}
            date="2022-2023"
            lieu="Montpellier"
            chalkId="2"
            highlightId="blue"
          />
          <Job
            title="Alternance Vandoeuvre Nancy Volley-Ball"
            description={[
              "Community Manager (Facebook, Instagram et Twitter",
              "Recherche de partenariat",
              "Organisation d'évènements sportifs (match de joueuses professionnelles, évènement partenaires, licenciés du club et bénévoles",
              "Gestion de la billeterie les soirs de match",
              "Accueil des partenaires et accompagnement lors des matchs",
              "Participation au déroulement du Club House",
              "Création de visuels pour les réseaux sociaux et affiches de match",
              "Entraînement des enfants",
            ]}
            date="2021-2022"
            lieu="Nancy"
            chalkId="3"
            highlightId="purple"
          />
          <Job
            title="Vendeuse Minelli"
            description={[
              "Accueil et conseil client",
              "Objectif de Chiffre d'Affaire journalier à atteindre",
              "Optimisation et gestion du magasin",
              "Gestion de la réserve",
              "Hôtesse de caisse",
              "Réception du magasin",
            ]}
            date="Août 2021"
            lieu="Nancy"
            chalkId="4"
            highlightId="green"
          />
        </div>
        <div className="col-4">
          <img src="./img/photo-vic.jpg" alt="" className="w-100" />
        </div>
        <div className="col-4 d-flex flex-wrap justify-content-around align-items-center">
          <Job
            title="Vendeuse NewYorker"
            description={[
              "Merchandising",
              "Conseil client",
              "Mise de produits en rayon",
            ]}
            date="Juillet 2022"
            lieu="Nancy"
            chalkId="5"
            highlightId="yellow"
          />
          <Job
            title="Missions Intérimaires Adecco"
            description={[
              "Inventaire de magasin (Bricomarché et Intermarché)",
              "Distribution de flyers",
              "Développement notoriété d'une marche (Dej Box)",
              "Employé commerciale chez Action Vandoeuvres",
            ]}
            date="2021"
            lieu="Nancy"
            chalkId="6"
            highlightId="blue"
          />
          <Job
            title="Stage en agence immobilière"
            description={[
              "Gestion dossier de location",
              "Prospection téléphonique",
              "Réalisation visites de biens immobiliers",
              "Conclusion contrats de location",
              "Création vidéos publicitaires et visuels pour affiches et réseaux sociaux",
              "Participation lors d'un contrat de vente, rendez-vous notaire et signature de contrat de vente",
            ]}
            date="2021"
            lieu="Toul"
            chalkId="1"
            highlightId="green"
          />
          <Job
            title="Hôte de Caisse chez Intermarché"
            description={["Mise en rayon de produtis", "Hôtesse de caisse"]}
            date="2020-2021"
            lieu="Colombey-lès-Belles"
            chalkId="2"
            highlightId="purple"
          />
        </div>
      </section>
    </div>
  );
};

export default Pro;
