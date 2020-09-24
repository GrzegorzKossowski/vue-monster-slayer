export const monsterName = () => {
    const monsters = [
        "Orbakh",
        "Baga",
        "Lurtzog",
        "Snakhak",
        "Ufthak",
        "Rishnag",
        "Uhur",
        "Mauhak",
        "Bulurtz",
        "Balcmeg",
        "Golfimb",
        "Uhuf",
        "Balcmauh",
        "Mauhur",
        "Balug",
        "Luga",
        "Othrol",
        "Grishnakh",
        "Uglur",
        "Gorga",
        "Muzga",
        "Olfil",
        "Orbakh",
        "Bulugd",
        "Lukil",
        "Lugdog",
        "Lugduf",
        "Gorbug",
        "Gorkil",
        "Orbat"
    ];

    return monsters[(monsters.length * Math.random()) | 0];
}

