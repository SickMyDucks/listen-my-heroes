window.onload = function() {
    var females = document.querySelectorAll('.character.woman');
    var males = document.querySelectorAll('.character.man')
    var description = document.querySelector('.description');
    var characters = document.querySelectorAll('.character');
    var names = document.querySelectorAll('h3');
    var hide = document.querySelector('#hide');
    var onlyMen = document.querySelector('#onlyMen');
    var onlyWomen = document.querySelector('#onlyWomen');
    var everybody = document.querySelector('#everybody');

    hide.onclick = function() {
        description.style.display = 'none';
    };

    onlyMen.onclick = function() {
        for(i = 0; i < females.length; i++) {
            females[i].style.display = 'none';
            males[i].style.display = 'block';
            description.style.display = 'none';
        }
    };

    onlyWomen.onclick = function() {
        for(i = 0; i < males.length; i++) {
            males[i].style.display = 'none';
            females[i].style.display = 'block';
            description.style.display = 'none';
        }
    };

    everybody.onclick = function() {
        for(i = 0; i < characters.length; i++) {
            males[i].style.display = 'block';
            females[i].style.display = 'block';
        }
    };

    for(i = 0; i < characters.length; i++) {
        characters[i].onclick = function() {
            description.style.display = 'block';
            switch (this.id) {
                case 'lux':
                    description.innerHTML = 'Lux est une mage possédant l\'abilité de maîtriser la lumière.';
                    break;

                case 'ezreal':
                    description.innerHTML = 'Ezreal, un jeune aventurier intrépide, a exploré certains des lieux les plus reculés et désertés de Runeterra.';
                    break;
                
                case 'jhin':
                    description.innerHTML = 'Jhin est un psychopathe méticuleux pour qui le meurtre est une forme d\'art.';
                    break;
                
                case 'shyvana':
                    description.innerHTML = 'Shyvana est un demi-dragon, une créature née de l\'union entre un dragon et un humain, tiraillée entre ces deux mondes.'
                    break;
                
                case 'nidalee':
                    description.innerHTML = 'Nidalee est une guerrière ayant acquis la possiblité de se transformer en cougar en grandissant parmi eux.'
                    break;
                
                case 'kled':
                    description.innerHTML = 'Guerrier aussi intrépide que grincheux, Kled est un héros populaire assez célèbre de Noxus.'
                    break;
            }
        };
    }
};