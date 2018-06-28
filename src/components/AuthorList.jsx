import React from 'react';
import Author from './Author';

const thedudes = [
  {
    name: 'Alexander Pushkin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kiprensky_Pushkin.jpg/515px-Kiprensky_Pushkin.jpg'
  },
  {
    name: 'Nikolai Gogol',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/N.Gogol_by_F.Moller_%281840%2C_Tretyakov_gallery%29.jpg/475px-N.Gogol_by_F.Moller_%281840%2C_Tretyakov_gallery%29.jpg'
  },
  {
    name: 'Ivan Turgenev',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Turgenev_by_Repin.jpg/459px-Turgenev_by_Repin.jpg'
  },
  {
    name: 'Fyodor Dostoyevsky',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Dostoevskij_1872.jpg/481px-Dostoevskij_1872.jpg'
  },
  {
    name: 'Leo Tolstoy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ilya_Efimovich_Repin_%281844-1930%29_-_Portrait_of_Leo_Tolstoy_%281887%29.jpg/441px-Ilya_Efimovich_Repin_%281844-1930%29_-_Portrait_of_Leo_Tolstoy_%281887%29.jpg'
  },
  {
    name: 'Anton Chekhov',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Chekhov_1898_by_Osip_Braz.jpg/467px-Chekhov_1898_by_Osip_Braz.jpg'
  }
];

function AuthorList() {
  return(
    <div>
      {thedudes.map((author, index) =>
        <div>
          <Author
            name={author.name}
            image={author.image}
            key={index}
          />

        </div>
      )}
    </div>
  );
}

export default AuthorList;
