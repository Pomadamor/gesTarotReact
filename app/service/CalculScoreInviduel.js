const addScores = (scores) => {
    return scores.reduce((a,c)=>a+c);
}

const createPlayer = (id, ...scores) => {
    return [`Joueur ${id}`, addScores(scores)]
}

export function CalculScoreIndividuel(dataIn) {

    const result =[]
    if (dataIn.preneurScore != 0){
        if( dataIn.preneur == dataIn.partenaire){
            // const TYPESPRENEUR = {};
            // const initialSum = dataIn.preneurScore + dataIn.partenaireScore;
            // for(let i = 1; i <= 5; i++){
            //     const [player, score] = createPlayer(i, dataIn[`scoreJ${i}`], initialSum)
            //     TYPESPRENEUR[player] = score;
            // }
            const TYPESPRENEUR = {
                "Joueur 1" : dataIn.scoreJ1 + dataIn.preneurScore + dataIn.partenaireScore,
                "Joueur 2" : dataIn.scoreJ2 + dataIn.preneurScore + dataIn.partenaireScore,
                "Joueur 3" : dataIn.scoreJ3 + dataIn.preneurScore + dataIn.partenaireScore,
                "Joueur 4" : dataIn.scoreJ4 + dataIn.preneurScore + dataIn.partenaireScore,
                "Joueur 5" : dataIn.scoreJ5 + dataIn.preneurScore + dataIn.partenaireScore,
           }
        }else{
            const TYPESPRENEUR = {
                "Joueur 1": dataIn.scoreJ1 + dataIn.preneurScore,
                "Joueur 2" : dataIn.scoreJ2 + dataIn.preneurScore,
                "Joueur 3" : dataIn.scoreJ2 + dataIn.preneurScore,
                "Joueur 4" : dataIn.scoreJ3 + dataIn.preneurScore,
                "Joueur 5" : dataIn.scoreJ4 + dataIn.preneurScore
           }
        }
    
        valuePreneur = TYPESPREUNEUR[dataIn.preneur]
    
        const TYPESPARTENAIRE = {
            "Joueur 1": dataIn.scoreJ1 + dataIn.partenaireScore,
            "Joueur 2" : dataIn.scoreJ2 + dataIn.partenaireScore,
            "Joueur 3" : dataIn.scoreJ2 + dataIn.partenaireScore,
            "Joueur 4" : dataIn.scoreJ3 + dataIn.partenaireScore,
            "Joueur 5" : dataIn.scoreJ4 + dataIn.partenaireScore
        }
    
        valuePartenaire = TYPESPARTENAIRE[dataIn.partenaire]

        result.push({
            actionPreneur : { type: "MUTATION_PRENEURSCORE", value: valuePreneur},
            actionPartenaire: { type: "MUTATION_PARTENAIRESCORE", value: valuePartenaire},
        })
    }
    return result
}
