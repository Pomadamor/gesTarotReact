export function CalculScore(datas){

    console.log ("test datas", datas)

    const result =[]
    
    const TYPESPRISE = {
         "Petite": 25,
         "Garde" : 50,
         "G-Sans" : 100,
         "G-Contre" : 200
    }
    valuePrise = TYPESPRISE[datas.type]

    const NBBOU = {
        "0": 56,
        "1" : 51,
        "2" : 41,
        "3" : 36
    }
    valueBou = NBBOU[datas.bou]
    
    console.log ("test valueBou", valueBou)
    if( parseInt(datas.score) != ""){      
        if(datas.score >= valueBou){
            if( parseInt(datas.score) >= valueBou){
                result.push({
                    actionPreneurScore : { type: "MUTATION_PRENEURSCORE", value: ( parseInt(datas.score) - valueBou + valuePrise)*2},
                    actionPartenaireScore : { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(datas.score) - valueBou + valuePrise},
                    actionAutreScore : { type: "MUTATION_AUTRESCORE", value: -( parseInt(datas.score) - valueBou+ valuePrise)}
                })
                // this.props.dispatch(actionAutreScore)
                // this.props.dispatch(actionPartenaireScore)
                // this.props.dispatch(actionPreneurScore)
            } else{
                result.push({
                    actionPreneurScore : { type: "MUTATION_PRENEURSCORE", value:  -(( parseInt(datas.score)-valueBou+valuePrise)*2)},
                    actionPartenaireScore : { type: "MUTATION_PARTENAIRESCORE", value:  -(parseInt(datas.score) - valueBou + valuePrise)},
                    actionAutreScore : { type: "MUTATION_AUTRESCORE", value: parseInt(datas.score) + valuePrise - valueBou}    
                })
                
                // this.props.dispatch(actionAutreScore)
                // this.props.dispatch(actionPartenaireScore)
                // this.props.dispatch(actionPreneurScore)
            }
        }
    }
    return result
}