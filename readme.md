# Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
    - ho preso la struttuta html e css gia fatta nell'esercitazione precedente, i colori delle chat hanno due classi differenti. 

● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto.
    - creo una array di oggetti in cui ogni oggetto avrà come proprieta image, nome e anteprima ultimo messaggio (orario?),
    - tramite il v-for lo stampo nella dom 

# Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione.

    - aggiungo i messaggi all'interno di ogni oggetto contact 
    
● Click sul contatto mostra la conversazione del contatto cliccato

# Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo