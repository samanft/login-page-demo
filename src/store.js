import { createStore } from 'vuex'

export default createStore({
    state: {
        heroes: [
            { name: "Saitama", elo: 1938 },
            { name: "Genos", elo: 1260 },
            { name: "Tatsumaki", elo: 955 },
            { name: "Bang", elo: 1733 },
            { name: "Steve", elo: 1100 },
            { name: "MumenRider", elo: 1000 },
        ]
    },
    mutations: {
        addHero(state, hero) {
            state.heroes.push(hero)
        }, updateElo(state, { hero, newElo }) {
            const heroToUpdate = state.heroes.find(h => h.name === hero.name)
            if (heroToUpdate) {
                heroToUpdate.elo = newElo
            }
        }
    }
})