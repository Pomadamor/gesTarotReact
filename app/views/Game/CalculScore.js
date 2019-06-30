victoire = false
preneurScore = 0
partenaireScore = 0
autreScore = 0
  
  //Si on joue a 5
  if(this.props.score != ""){
    if(this.props.bou == 0){
      if(this.props.score > 55){
        victoire = true
        if(this.props.partenaire != ""){
          if(this.props.type = "Petite"){
            preneurScore = (25 + this.props.score - 56)*2
            partenaireScore = 25 + this.props.score - 56
            autreScore = -(25 + this.props.score - 56)
          } else if(this.props.type = "Garde"){
            preneurScore = (50 + this.props.score - 56)*2
            partenaireScore = 50 + this.props.score - 56
            autreScore = -(50 + this.props.score - 56)
          } else if(this.props.type = "G-Sans"){
            preneurScore = (100 + this.props.score - 56)*2
            partenaireScore = 100 + this.props.score - 56
            autreScore = -(100 + this.props.score - 56)
          } else if(this.props.type = "G-Contre"){
            preneurScore = (200 + this.props.score - 56)*2
            partenaireScore = 200 + this.props.score - 56
            autreScore = -(200 + this.props.score - 56)
          }
        }else{
          if(this.props.type = "Petite"){
            preneurScore = (25 + this.props.score - 56)*(this.props.nbJoueur - 1)
            autreScore = -(25 + this.props.score - 56)
          } else if(this.props.type = "Garde"){
            preneurScore = (50 + this.props.score - 56)*(this.props.nbJoueur - 1)
            autreScore = -(50 + this.props.score - 56)
          } else if(this.props.type = "G-Sans"){
            preneurScore = (100 + this.props.score - 56)*(this.props.nbJoueur - 1)
            autreScore = -(100 + this.props.score - 56)
          } else if(this.props.type = "G-Contre"){
            preneurScore = (200 + this.props.score - 56)*(this.props.nbJoueur - 1)
            autreScore = -(200 + this.props.score - 56)
          }          
        }
      }else{
        victoire = false
        if(this.props.partenaire != ""){
          if(this.props.type = "Petite"){
            preneurScore = -(25 + this.props.score - 56)*2
            partenaireScore = -(25 + this.props.score - 56)
            autreScore = (25 + this.props.score - 56)
          } else if(this.props.type = "Garde"){
            preneurScore = -((50 + this.props.score - 56)*2)
            partenaireScore = -(50 + this.props.score - 56)
            autreScore = (50 + this.props.score - 56)
          } else if(this.props.type = "G-Sans"){
            preneurScore = -((100 + this.props.score - 56)*2)
            partenaireScore = -(100 + this.props.score - 56)
            autreScore = (100 + this.props.score - 56)
          } else if(this.props.type = "G-Contre"){
            preneurScore = -((200 + this.props.score - 56)*2)
            partenaireScore = -(200 + this.props.score - 56)
            autreScore = (200 + this.props.score - 56)
          }
        }else{
          if(this.props.type = "Petite"){
            preneurScore = -(25 + this.props.score - 56)*(this.props.nbJoueur - 1)
            autreScore = (25 + this.props.score - 56)
          } else if(this.props.type = "Garde"){
            preneurScore = -((50 + this.props.score - 56)*(this.props.nbJoueur - 1))
            autreScore = (50 + this.props.score - 56)
          } else if(this.props.type = "G-Sans"){
            preneurScore = -((100 + this.props.score - 56)*(this.props.nbJoueur - 1))
            autreScore = (100 + this.props.score - 56)
          } else if(this.props.type = "G-Contre"){
            preneurScore = -((200 + this.props.score - 56)*(this.props.nbJoueur - 1))
            autreScore = (200 + this.props.score - 56)
          }
        }
      }
    }else if(this.props.bou == 1){
      if(this.props.score > 50){
        victoire = true
        if(this.props.partenaire != ""){
          if(this.props.type = "Petite"){
            preneurScore = (25 + this.props.score - 51)*2
            partenaireScore = 25 + this.props.score - 51
            autreScore = -(25 + this.props.score - 51)
          } else if(this.props.type = "Garde"){
            preneurScore = (50 + this.props.score - 51)*2
            partenaireScore = 50 + this.props.score - 51
            autreScore = -(50 + this.props.score - 51)
          } else if(this.props.type = "G-Sans"){
            preneurScore = (100 + this.props.score - 51)*2
            partenaireScore = 100 + this.props.score - 51
            autreScore = -(100 + this.props.score - 51)
          } else if(this.props.type = "G-Contre"){
            preneurScore = (200 + this.props.score - 51)*2
            partenaireScore = 200 + this.props.score - 51
            autreScore = -(200 + this.props.score - 51)
          }
        }else{
          if(this.props.type = "Petite"){
            preneurScore = (25 + this.props.score - 51)*(this.props.nbJoueur - 1)
            autreScore = -(25 + this.props.score - 51)
          } else if(this.props.type = "Garde"){
            preneurScore = (50 + this.props.score - 51)*(this.props.nbJoueur - 1)
            autreScore = -(50 + this.props.score - 51)
          } else if(this.props.type = "G-Sans"){
            preneurScore = (100 + this.props.score - 51)*(this.props.nbJoueur - 1)
            autreScore = -(100 + this.props.score - 51)
          } else if(this.props.type = "G-Contre"){
            preneurScore = (200 + this.props.score - 51)*(this.props.nbJoueur - 1)
            autreScore = -(200 + this.props.score - 51)
          }          
        }
      }else{
        victoire = false
        if(this.props.partenaire != ""){
          if(this.props.type = "Petite"){
            preneurScore = -(25 + this.props.score - 51)*2
            partenaireScore = -(25 + this.props.score - 51)
            autreScore = (25 + this.props.score - 51)
          } else if(this.props.type = "Garde"){
            preneurScore = -((50 + this.props.score - 51)*2)
            partenaireScore = -(50 + this.props.score - 51)
            autreScore = (50 + this.props.score - 51)
          } else if(this.props.type = "G-Sans"){
            preneurScore = -((100 + this.props.score - 51)*2)
            partenaireScore = -(100 + this.props.score - 51)
            autreScore = (100 + this.props.score - 51)
          } else if(this.props.type = "G-Contre"){
            preneurScore = -((200 + this.props.score - 51)*2)
            partenaireScore = -(200 + this.props.score - 51)
            autreScore = (200 + this.props.score - 51)
          }
        }else{
          if(this.props.type = "Petite"){
            preneurScore = -(25 + this.props.score - 51)*(this.props.nbJoueur - 1)
            autreScore = (25 + this.props.score - 51)
          } else if(this.props.type = "Garde"){
            preneurScore = -((50 + this.props.score - 51)*(this.props.nbJoueur - 1))
            autreScore = (50 + this.props.score - 51)
          } else if(this.props.type = "G-Sans"){
            preneurScore = -((100 + this.props.score - 51)*(this.props.nbJoueur - 1))
            autreScore = (100 + this.props.score - 51)
          } else if(this.props.type = "G-Contre"){
            preneurScore = -((200 + this.props.score - 51)*(this.props.nbJoueur - 1))
            autreScore = (200 + this.props.score - 51)
          }
        }
      }
    }else if(this.props.bou == 2){
      if(this.props.score > 40){
        victoire = true
        if(this.props.partenaire != ""){
          if(this.props.type = "Petite"){
            preneurScore = (25 + this.props.score - 41)*2
            partenaireScore = 25 + this.props.score - 41
            autreScore = -(25 + this.props.score - 41)
          } else if(this.props.type = "Garde"){
            preneurScore = (50 + this.props.score - 41)*2
            partenaireScore = 50 + this.props.score - 41
            autreScore = -(50 + this.props.score - 41)
          } else if(this.props.type = "G-Sans"){
            preneurScore = (100 + this.props.score - 41)*2
            partenaireScore = 100 + this.props.score - 41
            autreScore = -(100 + this.props.score - 41)
          } else if(this.props.type = "G-Contre"){
            preneurScore = (200 + this.props.score - 41)*2
            partenaireScore = 200 + this.props.score - 41
            autreScore = -(200 + this.props.score - 41)
          }
        }else{
          if(this.props.type = "Petite"){
            preneurScore = (25 + this.props.score - 41)*(this.props.nbJoueur - 1)
            autreScore = -(25 + this.props.score - 41)
          } else if(this.props.type = "Garde"){
            preneurScore = (50 + this.props.score - 41)*(this.props.nbJoueur - 1)
            autreScore = -(50 + this.props.score - 41)
          } else if(this.props.type = "G-Sans"){
            preneurScore = (100 + this.props.score - 41)*(this.props.nbJoueur - 1)
            autreScore = -(100 + this.props.score - 41)
          } else if(this.props.type = "G-Contre"){
            preneurScore = (200 + this.props.score - 41)*(this.props.nbJoueur - 1)
            autreScore = -(200 + this.props.score - 41)
          }          
        }
      }else{
        victoire = false
        if(this.props.partenaire != ""){
          if(this.props.type = "Petite"){
            preneurScore = -(25 + this.props.score - 41)*2
            partenaireScore = -(25 + this.props.score - 41)
            autreScore = (25 + this.props.score - 41)
          } else if(this.props.type = "Garde"){
            preneurScore = -((50 + this.props.score - 41)*2)
            partenaireScore = -(50 + this.props.score - 41)
            autreScore = (50 + this.props.score - 41)
          } else if(this.props.type = "G-Sans"){
            preneurScore = -((100 + this.props.score - 41)*2)
            partenaireScore = -(100 + this.props.score - 41)
            autreScore = (100 + this.props.score - 41)
          } else if(this.props.type = "G-Contre"){
            preneurScore = -((200 + this.props.score - 41)*2)
            partenaireScore = -(200 + this.props.score - 41)
            autreScore = (200 + this.props.score - 41)
          }
        }else{
          if(this.props.type = "Petite"){
            preneurScore = -(25 + this.props.score - 41)*(this.props.nbJoueur - 1)
            autreScore = (25 + this.props.score - 41)
          } else if(this.props.type = "Garde"){
            preneurScore = -((50 + this.props.score - 41)*(this.props.nbJoueur - 1))
            autreScore = (50 + this.props.score - 41)
          } else if(this.props.type = "G-Sans"){
            preneurScore = -((100 + this.props.score - 41)*(this.props.nbJoueur - 1))
            autreScore = (100 + this.props.score - 41)
          } else if(this.props.type = "G-Contre"){
            preneurScore = -((200 + this.props.score - 41)*(this.props.nbJoueur - 1))
            autreScore = (200 + this.props.score - 41)
          }
        }
      }
    }else if(this.props.bou == 3){
      if(this.props.score > 35){
        victoire = true
        if(this.props.partenaire != ""){
          if(this.props.type = "Petite"){
            preneurScore = (25 + this.props.score - 36)*2
            partenaireScore = 25 + this.props.score - 36
            autreScore = -(25 + this.props.score - 36)
          } else if(this.props.type = "Garde"){
            preneurScore = (50 + this.props.score - 36)*2
            partenaireScore = 50 + this.props.score - 36
            autreScore = -(50 + this.props.score - 36)
          } else if(this.props.type = "G-Sans"){
            preneurScore = (100 + this.props.score - 36)*2
            partenaireScore = 100 + this.props.score - 36
            autreScore = -(100 + this.props.score - 36)
          } else if(this.props.type = "G-Contre"){
            preneurScore = (200 + this.props.score - 36)*2
            partenaireScore = 200 + this.props.score - 36
            autreScore = -(200 + this.props.score - 36)
          }
        }else{
          if(this.props.type = "Petite"){
            preneurScore = (25 + this.props.score - 36)*(this.props.nbJoueur - 1)
            autreScore = -(25 + this.props.score - 36)
          } else if(this.props.type = "Garde"){
            preneurScore = (50 + this.props.score - 36)*(this.props.nbJoueur - 1)
            autreScore = -(50 + this.props.score - 36)
          } else if(this.props.type = "G-Sans"){
            preneurScore = (100 + this.props.score - 36)*(this.props.nbJoueur - 1)
            autreScore = -(100 + this.props.score - 36)
          } else if(this.props.type = "G-Contre"){
            preneurScore = (200 + this.props.score - 36)*(this.props.nbJoueur - 1)
            autreScore = -(200 + this.props.score - 36)
          }          
        }
      }else{
        victoire = false
        if(this.props.partenaire != ""){
          if(this.props.type = "Petite"){
            preneurScore = -(25 + this.props.score - 36)*2
            partenaireScore = -(25 + this.props.score - 36)
            autreScore = (25 + this.props.score - 36)
          } else if(this.props.type = "Garde"){
            preneurScore = -((50 + this.props.score - 36)*2)
            partenaireScore = -(50 + this.props.score - 36)
            autreScore = (50 + this.props.score - 36)
          } else if(this.props.type = "G-Sans"){
            preneurScore = -((100 + this.props.score - 36)*2)
            partenaireScore = -(100 + this.props.score - 36)
            autreScore = (100 + this.props.score - 36)
          } else if(this.props.type = "G-Contre"){
            preneurScore = -((200 + this.props.score - 36)*2)
            partenaireScore = -(200 + this.props.score - 36)
            autreScore = (200 + this.props.score - 36)
          }
        }else{
          if(this.props.type = "Petite"){
            preneurScore = -(25 + this.props.score - 56)*(this.props.nbJoueur - 1)
            autreScore = (25 + this.props.score - 56)
          } else if(this.props.type = "Garde"){
            preneurScore = -((50 + this.props.score - 56)*(this.props.nbJoueur - 1))
            autreScore = (50 + this.props.score - 56)
          } else if(this.props.type = "G-Sans"){
            preneurScore = -((100 + this.props.score - 56)*(this.props.nbJoueur - 1))
            autreScore = (100 + this.props.score - 56)
          } else if(this.props.type = "G-Contre"){
            preneurScore = -((200 + this.props.score - 56)*(this.props.nbJoueur - 1))
            autreScore = (200 + this.props.score - 56)
          }
        }
      }
    }
  }
