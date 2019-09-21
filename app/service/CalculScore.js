/**
   * Fonction qui permet de calculer les scores des differents types de joueurs en fonction du score défini dans la grillScore
   */
export function CalculScore(datas){

    const result =[]
    
    const TYPESPRISE = {
         "Petite": 25,
         "Garde" : 50,
         "G-Sans" : 100,
         "G-Co." : 200
    }
    valuePrise = TYPESPRISE[datas.type]

    const NBBOU = {
        "0": 56,
        "1" : 51,
        "2" : 41,
        "3" : 36
    }
    valueBou = NBBOU[datas.bou]
    

    const SCORE = {
        "Joueur 1" : datas.scoreJ1,
        "Joueur 2" : datas.scoreJ2,
        "Joueur 3" : datas.scoreJ3,
        "Joueur 4" : datas.scoreJ4,
        "Joueur 5" : datas.scoreJ5
    }
    console.log ("test type", datas.type)

    if(datas.score > 0){

        console.log("datas.score " + datas.score)
        console.log("valueBou " + valueBou)
        console.log("valueBou test" + datas.bou)

        console.log("ValuePrise " + valuePrise)

        if(datas.score >= valueBou){
            const AUTRES = {
                "Joueur 1" : -(parseInt(datas.score) - valueBou+ valuePrise),
                "Joueur 2" : -(parseInt(datas.score) - valueBou+ valuePrise),
                "Joueur 3" : -(parseInt(datas.score) - valueBou+ valuePrise),
                "Joueur 4" : -(parseInt(datas.score) - valueBou+ valuePrise),
                "Joueur 5" : -(parseInt(datas.score) - valueBou+ valuePrise)
            }
            AUTRES[datas.preneur] = (parseInt(datas.score) - valueBou + valuePrise)*2
            AUTRES[datas.partenaire] = parseInt(datas.score) - valueBou + valuePrise

            result.push(
                actionScoreJ1 = { type: "MUTATION_SCORE_J1", value: (SCORE["Joueur 1"] + AUTRES["Joueur 1"]).toString()},
                actionScoreJ2 = { type: "MUTATION_SCORE_J2", value: (SCORE["Joueur 2"] + AUTRES["Joueur 2"]).toString()},
                actionScoreJ3 = { type: "MUTATION_SCORE_J3", value: (SCORE["Joueur 3"] + AUTRES["Joueur 3"]).toString()},
                actionScoreJ4 = { type: "MUTATION_SCORE_J4", value: (SCORE["Joueur 4"] + AUTRES["Joueur 4"]).toString()},
                actionScoreJ5 = { type: "MUTATION_SCORE_J5", value: (SCORE["Joueur 5"] + AUTRES["Joueur 5"]).toString()}
            )
        }else{
            const AUTRES = {
                "Joueur 1" : (parseInt(datas.score) - valueBou+ valuePrise),
                "Joueur 2" : (parseInt(datas.score) - valueBou+ valuePrise),
                "Joueur 3" : (parseInt(datas.score) - valueBou+ valuePrise),
                "Joueur 4" : (parseInt(datas.score) - valueBou+ valuePrise),
                "Joueur 5" : (parseInt(datas.score) - valueBou+ valuePrise)
            }
            AUTRES[datas.preneur] = -((parseInt(datas.score) - valueBou + valuePrise)*2)
            AUTRES[datas.partenaire] = -(parseInt(datas.score) - valueBou + valuePrise)

            result.push(
                actionScoreJ1 = { type: "MUTATION_SCORE_J1", value: (SCORE["Joueur 1"] + AUTRES["Joueur 1"]).toString()},
                actionScoreJ2 = { type: "MUTATION_SCORE_J2", value: (SCORE["Joueur 2"] + AUTRES["Joueur 2"]).toString()},
                actionScoreJ3 = { type: "MUTATION_SCORE_J3", value: (SCORE["Joueur 3"] + AUTRES["Joueur 3"]).toString()},
                actionScoreJ4 = { type: "MUTATION_SCORE_J4", value: (SCORE["Joueur 4"] + AUTRES["Joueur 4"]).toString()},
                actionScoreJ5 = { type: "MUTATION_SCORE_J5", value: (SCORE["Joueur 5"] + AUTRES["Joueur 5"]).toString()}
            )
        }
    }
    console.log("test y",result)
    return result
}