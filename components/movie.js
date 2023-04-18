import React, { useState } from 'react';
import styles from '../styles/Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faStar, faVideo, faHeart } from '@fortawesome/free-solid-svg-icons';

function Movie(props) {
  //console.log(props);
  // 5 props : overview, title,poster, etc ...

  const stars = [];
  // il va falloir utiliser un style inline
  // color : #f1c40f
  for (let i = 0; i < 10; i++) {
    // il y a une condition à ajouter ici pour pouvoir afficher l'average sous forme d'étoiles
    // il faut faire une condition où la valeur de l'index i de votre étoile devra être inférieur
    // à la valeur du vote moins 1 !
    let style = {};
    if (i < props.voteAverage - 1) {
      style = { color: '#f1c40f' };
    }

    stars.push(<FontAwesomeIcon icon={faStar} key={i} style={style} />);
  }

  // 1 //
  // Définissez les trois états suivants avec leur setter :
  // personalNote initialisé à 0
  // watchCount initialisé à 0
  // like initialisé à false

  // 2 => personalNot//
  // Créer le système des étoiles de notation personnelle #2196f3
  // Au clic sur une étoile, vous attribuerez la note sous forme d'étoile
  // entre parenthèses affichez la note après les étoiles

  const [personalNote, setPersonalNote] = useState(0);
  //ETAT         //SETTER

  const personalStars = [];

  for (let i = 0; i < 10; i++) {
    let style = { cursor: 'pointer' };
    if (i < personalNote) {
      style = { color: '#2196f3', cursor: ' pointer' };
    }
    personalStars.push(
      <FontAwesomeIcon
        icon={faStar}
        onClick={() => setPersonalNote(i + 1)}
        key={i}
        style={style}
      />
    );
  }

  // 3 => watchCount //
  // au clic sur la caméra l'icone deviendra rouge #e74c3c et on incrémente à chaque clic
  const [watchCount, setWatchCount] = useState(0);
  const handleMovie = () => {
    setWatchCount(watchCount + 1);
  };
  let videoIconStyle = { cursor: 'pointer' };
  if (watchCount > 0) {
    videoIconStyle = { color: '#e74c3c', cursor: 'pointer' };
  }

  // 4 => like //
  // Mettre en place le système de like : au clic le coeur devient rouge et au re-clic il redeviendra noir
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };

  let heartIconStyle = { cursor: 'pointer' };
  if (like) {
    heartIconStyle = { color: '#e74c3c', cursor: 'pointer' };
  }



  

  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={props.poster}
        alt={props.title}
        width={150}
        height={310}
      />
      <div className={styles.textContainer}>
        <span className={styles.name}>{props.title}</span>
        <p className={styles.description}>{props.overview}</p>
      </div>
      <span className={styles.vote}>
        {stars} ({props.voteCount})
      </span>
      <span className={styles.vote}>
        {personalStars} ({personalNote})
      </span>
      <span>
        <FontAwesomeIcon
          icon={faVideo}
          style={videoIconStyle}
          onClick={() => handleMovie()}
        />
        ({watchCount})
      </span>
      <span>
        <FontAwesomeIcon
          icon={faHeart}
          style={heartIconStyle}
          onClick={() => handleLike()}
        />
      </span>
    </div>
  );
}

export default Movie;
