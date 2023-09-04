# Product list di test

Applicazione per il listing dei prodotti utilizzando Next.js e Tailwind CSS.

## Motivazione

Ho scelto Next.js per la sua capacità di caricare i prodotti lato server, migliorando l'indicizzazione su motori di ricerca, e ho scelto Tailwind CSS per la sua velocità nel creare una struttura del sito e la sua facilità di personalizzazione.

## Getting Started

Per iniziare, esegui l'installazione della SPA:

```bash
npm install
```

Successivamente, avvia il server con il seguente comando:

```bash
npm run dev
# oppure
yarn dev
# oppure
pnpm dev
```

Apri il browser e vai all'indirizzo [http://localhost:3000](http://localhost:3000).

## Struttura delle pagine

La struttura delle pagine è organizzata nel seguente modo:

- **root**: rappresenta la home page dell'applicazione, accessibile all'indirizzo [http://localhost:3000](http://localhost:3000). Da qui è possibile selezionare le collezioni disponibili.
- **root/collection**: questa pagina elenca tutti i prodotti presenti nella collezione selezionata.
- **root/product**: selezionando un prodotto dalla pagina delle collezioni, si accede alla pagina di dettaglio del prodotto. Da qui è possibile aggiungere il prodotto al carrello.

## Componenti

- **Paginazione**: Nella pagina Collection i prodotti sono divisi per pagina con un limite massimo di 4 prodotti, il componente Paginazione si trova in fondo al listing.
- **Ordinamenti**: Nella pagina Collection i prodotti possono essere ordinati dal primo all'ultimo e avere una visione del prodotto ristretta o allargata utilizzando i bottoni in alto a destra.
- **Carrello**: Nel menu in alto a destra si trova l'icona del carrello. Se premuta, appariranno i prodotti aggiunti al carrello. In caso non siano presenti prodotti nel carrello, verrà visualizzata un'etichetta vuota.

## Deploy su Vercel

Per effettuare il deploy dell'applicazione su Vercel, segui i passaggi seguenti:

1. Aggiungi il repository a Vercel.
2. Aggiungi la variabile d'ambiente **DB_HOST** con l'URL corretto.

## Aggiunte possibili

Nuove funzionalità da aggiungere in futuro per completare l'applicazione:

- **Breadcrumbs**: introduzione di un sistema di navigazione a "briciole di pane" per migliorare l'usabilità.
- **Aspect-ratio delle immagini**: forzare le immagini dei prodotti ad avere lo stesso aspect-ratio per una visualizzazione uniforme.
- **Eliminazione dei prodotti dal carrello**: possibilità di rimuovere i prodotti direttamente dal carrello.
- **Gestione della quantità**: unire i prodotti uguali nel carrello, gestendo la quantità in modo più efficiente.

---
