# Composant Modal Simple

Un composant modal léger et personnalisable pour les applications React.

## Installation

```bash
npm install easy-modale

ou

yarn add easy-modale

```

### Utilisation

Voici comment utiliser le composant Modal dans votre application React :

# Exemple de Code

```js
import React, { useState } from 'react';
import { Modal } from 'easy-modale';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div>
			<button onClick={openModal}>Ouvrir la modale</button>
			<Modal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
}

export default App;
```

# Propriétés

Le composant modal accepte les propriétés suivantes:

| Props   | Type     | Description                                   |
| ------- | -------- | --------------------------------------------- |
| isOpen  | boolean  | Contrôle si la modale est ouverte ou fermée   |
| onClose | function | Fcontion qui lors de l'appel, ferme la modale |

# Style

Le composant Modal utilise des classes Tailwind CSS pour le style. Assurez-vous d'inclure Tailwind CSS dans votre projet pour que les styles fonctionnent correctement. Pour cela, vous devez créer un fichier tailwind.config.js et installer les dépendances suivantes:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Vous pouvez suivre la documentation sur `https://tailwindcss.com/docs/installation`

# Dépendances

Ce composant nécessite les dépendances suivantes :

- React
- lucide-react

Vous devez les installer de la manière suivante:

```bash
npm i react
npm i lucide-react
```

# Licence

- Ce projet est sous la licence ISC.

# Contribution

- Les contributions sont les bienvenues.

# Auteur

- Gizmoux
