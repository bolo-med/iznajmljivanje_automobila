import serverInstance from './app';

serverInstance.listen(3000, err => {
    if (err) {
        console.log('Greska prilikom pokretanja veb-servera!');
    }
    else {
        console.log('Server je uspjesno pokrenut na portu 3000!');
    }
});

