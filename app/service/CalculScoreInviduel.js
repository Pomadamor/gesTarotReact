export function CalculScoreIndividuel(dataIn) {

  console.log("test calculScoreIndividuel", dataIn)

  
  // preneur = dataIn.preneur
  // partenaire = dataIn.partenaire

  // score["Joueur 1"] = dataIn.scoreJ1
  // score["Joueur 2"] = ...
  // score["Joueur 3"] = ..
  // score["Joueur 4"] = ..
  // score["Joueur 5"] = ..

  // autres = score

  // delete autres[dataIn.preneur]
  // delete autres[dataIn.partenaire]

  // score[preneur] += 2*scorebase
  // score[partenaire] += scorebase

//   preneur = dataIn.preneurScore
//   partenaire = dataIn.partenaireScore
//   autre = dataIn.autreScore

//   score["Joueur 1"] = dataIn.scoreJ1
//   score["Joueur 2"] = dataIn.scoreJ2
//   score["Joueur 3"] = dataIn.scoreJ3
//   score["Joueur 4"] = dataIn.scoreJ4
//   score["Joueur 5"] = dataIn.scoreJ5

//   const result = []

//   if (dataIn.preneurScore != 0) {
//     if (dataIn.preneur == dataIn.partenaire) {
//       const TYPESPRENEUR = {
//         "Joueur 1": dataIn.scoreJ1 + dataIn.preneurScore + dataIn.partenaireScore,
//         "Joueur 2": dataIn.scoreJ2 + dataIn.preneurScore + dataIn.partenaireScore,
//         "Joueur 3": dataIn.scoreJ3 + dataIn.preneurScore + dataIn.partenaireScore,
//         "Joueur 4": dataIn.scoreJ4 + dataIn.preneurScore + dataIn.partenaireScore,
//         "Joueur 5": dataIn.scoreJ5 + dataIn.preneurScore + dataIn.partenaireScore,
//       }
//       valuePreneur = TYPESPREUNEUR[dataIn.preneur]
//       valuePartenaire = TYPESPARTENAIRE[dataIn.partenaire]
//     } else {
//       const TYPESPRENEUR = {
//         "Joueur 1": dataIn.scoreJ1 + dataIn.preneurScore,
//         "Joueur 2": dataIn.scoreJ2 + dataIn.preneurScore,
//         "Joueur 3": dataIn.scoreJ2 + dataIn.preneurScore,
//         "Joueur 4": dataIn.scoreJ3 + dataIn.preneurScore,
//         "Joueur 5": dataIn.scoreJ4 + dataIn.preneurScore
//       }

//       const TYPESPARTENAIRE = {
//         "Joueur 1": dataIn.scoreJ1 + dataIn.partenaireScore,
//         "Joueur 2": dataIn.scoreJ2 + dataIn.partenaireScore,
//         "Joueur 3": dataIn.scoreJ2 + dataIn.partenaireScore,
//         "Joueur 4": dataIn.scoreJ3 + dataIn.partenaireScore,
//         "Joueur 5": dataIn.scoreJ4 + dataIn.partenaireScore
//       }
//       valuePreneur = TYPESPREUNEUR[dataIn.preneur]
//       valuePartenaire = TYPESPARTENAIRE[dataIn.partenaire]
//     }



//     result.push({
//       actionPreneur: { type: "MUTATION_PRENEURSCORE", value: valuePreneur },
//       actionPartenaire: { type: "MUTATION_PARTENAIRESCORE", value: valuePartenaire },
//       actionAutre: { type: "MUTATION_AUTRESCORE", value: valueAutre },
//     })
//   }
//   return result
}