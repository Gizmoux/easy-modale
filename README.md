# Composant Modal Simple

Un composant modal léger et personnalisable pour les applications React.

## Installation

```bash
npm install easy-modale

ou

yarn add easy-modale

```

# Environnement de développement

## Pour un développement optimal, nous recommandons :

- Node.js : version 14.x ou supérieure
- Éditeur de code : Visual Studio Code (VS Code)

  Ces outils assureront une meilleure expérience de développement avec votre environement.

### Utilisation

Voici comment utiliser le composant Modal dans votre application React :

# Exemple de Code

```js
import React, { useState } from 'react';
import { Modal } from 'easy-modale';
import { Circle } from 'lucide-react';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-white mb-8">
					Demonstration de Easy Modale
				</h1>
				<button
					onClick={openModal}
					className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full
                     shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out
                     flex items-center justify-center"
				>
					<Circle className="mr-2" size={20} />
					Open Modal
				</button>
				<Modal isOpen={isModalOpen} onClose={closeModal} />
			</div>
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
