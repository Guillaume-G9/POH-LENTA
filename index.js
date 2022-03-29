let themeSong = document.querySelector(".song")
let main = document.querySelector("main")
let mainTxt = document.querySelector("h2")
let life = document.querySelector(".progress__bar")
let leftBtn = document.querySelector(".red")
let rightBtn = document.querySelector(".yellow")
let nextBtn = document.querySelector("button")
let finalState = document.querySelector(".end")
let applause = document.querySelector(".applause")
let flies = document.querySelector(".flies")
let fart = document.querySelector(".fart")
let shout = document.querySelector(".ah")

let endGame = false

function fnEndGame() {
    endGame = true;
    themeSong.pause() 
 }

main.addEventListener("click", (e) => {
    shout.play()
    themeSong.play() 


    if(e.target.className === "yellow") {
        nextBtn.style.display = "block"
        leftBtn.style.display ="none"
        mainTxt.textContent = `Le jaune attire tous les moustiques, vous êtes piqués de partout !`
        life.style.width = "80%"

        nextBtn.addEventListener("click", (e) => {
            nextBtn.style.display = "none"
            leftBtn.style.display ="block"
            rightBtn.style.display ="block"
            mainTxt.textContent = `Chercher de la nourriture`
            leftBtn.textContent = `Oui`
            rightBtn.textContent = `Non`
    
    
            addEventListener("click", (e) => {
                if(e.target.className === "red") {
                    leftBtn.style.display ="none"
                    rightBtn.style.display ="none"
                    nextBtn.style.display = "block"
                    mainTxt.textContent = `Vous allez utilisé une bonne partie de votre force vitale pour vous nourrir, le jeune intermitant était peut-être la solution`
                    life.style.width = "60%"
                    nextBtn.addEventListener("click", () => {
                        leftBtn.style.display ="block"
                        rightBtn.style.display ="block"
                        mainTxt.textContent = `Gouter ou faire gouter les trouvailles`
                        leftBtn.textContent = `Gouter`
                        rightBtn.textContent = `Faire goûter`
                        
                        addEventListener("click", (e) => {
                            if(e.target.className ==="red") {
                                mainTxt.textContent = `Vous êtes un aventurier aggueri, vous differencez les racines, mais le repas est trop mince`
                                life.style.width = "100%"

                                nextBtn.addEventListener("click", () => {
                                    mainTxt.textContent = `Un aventurier qui n'a rien foutu vous demande s'il peut récupérer les restes car il a faim, mais il est mal vu par le reste de l'équipe `
                                    leftBtn.textContent = `Accepter`
                                    rightBtn.textContent = `Refuser`


                                    if(e.target.className ==="red") {
                                        mainTxt.textContent = `Tout le monde vous déteste sur le camp, vous vous excusez auprès des autres ou vous faites équipe avec le glandeur ?`

                                        leftBtn.textContent = `S'excuser`
                                        rightBtn.textContent = `S'allier`

                                        if(e.target.className ==="red") {
                                            fnEndGame()
                                            mainTxt.textContent = `Vous avez été eliminé du jeu, le reste de l'équipe a feinté semblant de vous pardonner pour mieux vous éliminer`
    
                                            finalState.textContent = `LE CREDULE`
                                            nextBtn.textContent = `REJOUER`
                                            life.style.width = "0%"
    
                                            leftBtn.style.display ="none"
                                            rightBtn.style.display ="none"
                                            
    
                                            nextBtn.addEventListener("click", () => {
                                            location.reload()
                                            main.style.display = "none"
                                            })
    
                                        } else if(e.target.className === "yellow") {
                                            mainTxt.textContent = `Il s'avère que le glandeur est un sportif pro, qui voulait s'économiser,vous avez formé la meilleure alliance vue à ce jour, peut importe qui allait gagner. Vous avez fait 50/50, car gagner c'est bien, mais 50K c'est mieux...`
                                            
                                            finalState.textContent = `VOUS AVEZ GAGNE`
                                            nextBtn.textContent = `BRAVO`
                                            life.style.width = "100%"
    
                                            applause.play()
    
                                            nextBtn.addEventListener("click", () => {
                                            location.reload()
                                            main.style.display = "none"
                                            })        
                                        }

                                    } else if(e.target.className === "yellow") {
                                        fnEndGame()
                                        mainTxt.textContent = `Le glandeur à vraiment eu pitié de vous, il vous à donc donné à manger, mais c'est un glandeur donc il n'a pas reussi à différencier les racines, vous mourrez intoxiqué`
                                        
                                        finalState.textContent = `VOUS AVEZ PERDU`
                                        nextBtn.textContent = `REJOUER`
                                        life.style.width = "0%"

                                        fart.play()
                                        leftBtn.style.display ="none"
                                        rightBtn.style.display ="none"

                                        nextBtn.addEventListener("click", () => {
                                        location.reload()
                                        main.style.display = "none"
                                        })        
                                    }

                                })


                            } else if(e.target.className === "yellow") {
                                mainTxt.textContent = `Vous êtes généreux et ça va vous tuer`
                                life.style.width = "40%"

                                nextBtn.addEventListener("click", () => {
                                    mainTxt.textContent = `Vous avez de nouveau faim, chercher de la nourriture?`
                                    leftBtn.textContent = `Chercher`
                                    rightBtn.textContent = `Ne pas chercher`


                                    if(e.target.className ==="red") {
                                        fnEndGame()
                                        mainTxt.textContent = `Il faut savoir être égoiste de temps en temps, maintenant les autres peuvent continuer l'aventure, mais sans vous...`

                                        finalState.textContent = `VOUS AVEZ PERDU`
                                        nextBtn.textContent = `REJOUER`
                                        life.style.width = "0%"

                                        leftBtn.style.display ="none"
                                        rightBtn.style.display ="none"

                                        nextBtn.addEventListener("click", () => {
                                        location.reload()
                                        main.style.display = "none"
                                        })

                                    } else if(e.target.className === "yellow") {
                                        fnEndGame()
                                        mainTxt.textContent = `Le glandeur à vraiment eu pitié de vous, il vous à donc donné à manger, mais c'est un glandeur donc il n'a pas reussi à différencier les racines, vous mourrez intoxiqué`
                                        
                                        finalState.textContent = `VOUS AVEZ PERDU`
                                        nextBtn.textContent = `REJOUER`
                                        life.style.width = "0%"

                                        fart.play()
                                        leftBtn.style.display ="none"
                                        rightBtn.style.display ="none"

                                        nextBtn.addEventListener("click", () => {
                                        location.reload()
                                        main.style.display = "none"
                                        })        
                                    }

                                })

                            }
                        })
                    })
                } else {
                    if(e.target.className === "yellow") {
                        leftBtn.style.display ="none"
                        rightBtn.style.display ="none"
                        nextBtn.style.display = "block"
                        mainTxt.textContent = `Attendre sur la plage vous donne faim...`
                        life.style.width = "60%"
                        nextBtn.addEventListener("click", () => {
                            mainTxt.textContent = `Prendre la nourriture ou se laisser vivre`
                            leftBtn.textContent = `Prendre`
                            rightBtn.textContent = `Se laisser vivre`

                            addEventListener("click", (e) => {
                                if(e.target.className ==="red") {
                                    fnEndGame()
                                    mainTxt.textContent = `Vous auriez du vous activer pour différencier le manioc d'une simple racine`
                                    finalState.textContent = `VOUS AVEZ PERDU`
                                    nextBtn.textContent = `REJOUER`
                                    life.style.width = "0%"
                                    leftBtn.style.display ="none"
                                    rightBtn.style.display ="none"

                                    nextBtn.addEventListener("click", () => {
                                        location.reload()
                                        main.style.display = "none"
                                    })
                                } else if(e.target.className === "yellow") {
                                    mainTxt.textContent = `Vous êtes le seul survivant economiser ses forces a été rentable`
                                    life.style.width = "20%"

                                    nextBtn.addEventListener("click", () => {
                                        mainTxt.textContent = `Il reste une journée d'aventure, continuer ou arrêter ?`
                                        leftBtn.textContent = `Continuer`
                                        rightBtn.textContent = `Arrêter`


                                        addEventListener("click", (e) => {
                                            if(e.target.className === "red") {
                                                fnEndGame()
                                                mainTxt.textContent = `Vous avez gagné, mais votre façon de faire n'a pas plus aux téléspectateurs; ils éprouvent du dégoût pour vous, on vous appelle dorénavant "El Caffardo", vous allez finir seul...`
                                                finalState.textContent = `VOUS VOUS ETES TRANSFORME EN CAFARD`
                                                nextBtn.textContent = `REJOUER`
                                                life.style.width = "100%"
                                                leftBtn.style.display ="none"
                                                rightBtn.style.display ="none"
                                                flies.play()

                                                nextBtn.addEventListener("click", () => {
                                                    location.reload()
                                                    main.style.display = "none"
                                                })

                                            } else if(e.target.className === "yellow") {
                                                fnEndGame()
                                                mainTxt.textContent = `Vous etes rentré, mais on vous considère comme un lâche qui a arrêté à un jour de la fin, on ne connait plus votre prenom, vous êtes dorénavant surnommé "celui qui a loupé les 100k"`
                                                finalState.textContent = `CELUI QUI A LOUPE LES 100K`
                                                nextBtn.textContent = `REJOUER`
                                                life.style.width = "0%"
                                                leftBtn.style.display ="none"
                                                rightBtn.style.display ="none"

                                                nextBtn.addEventListener("click", () => {
                                                    location.reload()
                                                    main.style.display = "none"
                                                })

                                            }
                                        })
                                    })
                                }
                            })
                        })
                    }
                }
    
            }) 
        })

        

    } else if(e.target.className === "red") {
        rightBtn.style.display ="none"
        nextBtn.style.display = "block"

        nextBtn.addEventListener("click", (e) => {
            nextBtn.style.display = "none"
            leftBtn.style.display ="block"
            rightBtn.style.display ="block"
            mainTxt.textContent = `Chercher de la nourriture`
            leftBtn.textContent = `Oui`
            rightBtn.textContent = `Non`
    
    
            addEventListener("click", (e) => {
                if(e.target.className === "red") {
                    leftBtn.style.display ="none"
                    rightBtn.style.display ="none"
                    nextBtn.style.display = "block"
                    mainTxt.textContent = `Vous allez utilisé une bonne partie de votre force vitale pour vous nourrir, le jeune intermitant était peut-être la solution`
                    life.style.width = "60%"
                    nextBtn.addEventListener("click", () => {
                        leftBtn.style.display ="block"
                        rightBtn.style.display ="block"
                        mainTxt.textContent = `Gouter ou faire gouter les trouvailles`
                        leftBtn.textContent = `Gouter`
                        rightBtn.textContent = `Faire goûter`
                        
                        addEventListener("click", (e) => {
                            if(e.target.className ==="red") {
                                mainTxt.textContent = `Vous êtes un aventurier aggueri, vous differencez les racines, mais le repas est trop mince`
                                life.style.width = "100%"

                                nextBtn.addEventListener("click", () => {
                                    mainTxt.textContent = `Un aventurier qui n'a rien foutu vous demande s'il peut récupérer les restes car il a faim, mais il est mal vu par le reste de l'équipe `
                                    leftBtn.textContent = `Accepter`
                                    rightBtn.textContent = `Refuser`


                                    if(e.target.className ==="red") {
                                        mainTxt.textContent = `Tout le monde vous déteste sur le camp, vous vous excusez auprès des autres ou vous faites équipe avec le glandeur ?`

                                        leftBtn.textContent = `S'excuser`
                                        rightBtn.textContent = `S'allier`

                                        if(e.target.className ==="red") {
                                            fnEndGame()
                                            mainTxt.textContent = `Vous avez été eliminé du jeu, le reste de l'équipe a feinté semblant de vous pardonner pour mieux vous éliminer`
    
                                            finalState.textContent = `LE CREDULE`
                                            nextBtn.textContent = `REJOUER`
                                            life.style.width = "0%"
    
                                            leftBtn.style.display ="none"
                                            rightBtn.style.display ="none"
                                            
    
                                            nextBtn.addEventListener("click", () => {
                                            location.reload()
                                            main.style.display = "none"
                                            })
    
                                        } else if(e.target.className === "yellow") {
                                            mainTxt.textContent = `Il s'avère que le glandeur est un sportif pro, qui voulait s'économiser,vous avez formé la meilleure alliance vue à ce jour, peut importe qui allait gagner. Vous avez fait 50/50, car gagner c'est bien, mais 50K c'est mieux...`
                                            
                                            finalState.textContent = `VOUS AVEZ GAGNE`
                                            nextBtn.textContent = `BRAVO`
                                            life.style.width = "100%"
    
                                            applause.play()
    
                                            nextBtn.addEventListener("click", () => {
                                            location.reload()
                                            main.style.display = "none"
                                            })        
                                        }

                                    } else if(e.target.className === "yellow") {
                                        fnEndGame()
                                        mainTxt.textContent = `Le glandeur à vraiment eu pitié de vous, il vous à donc donné à manger, mais c'est un glandeur donc il n'a pas reussi à différencier les racines, vous mourrez intoxiqué`
                                        
                                        finalState.textContent = `VOUS AVEZ PERDU`
                                        nextBtn.textContent = `REJOUER`
                                        life.style.width = "0%"

                                        fart.play()
                                        leftBtn.style.display ="none"
                                        rightBtn.style.display ="none"

                                        nextBtn.addEventListener("click", () => {
                                        location.reload()
                                        main.style.display = "none"
                                        })        
                                    }

                                })


                            } else if(e.target.className === "yellow") {
                                mainTxt.textContent = `Vous êtes généreux et ça va vous tuer`
                                life.style.width = "40%"

                                nextBtn.addEventListener("click", () => {
                                    mainTxt.textContent = `Vous avez de nouveau faim, chercher de la nourriture?`
                                    leftBtn.textContent = `Chercher`
                                    rightBtn.textContent = `Ne pas chercher`


                                    if(e.target.className ==="red") {
                                        fnEndGame()
                                        mainTxt.textContent = `Il faut savoir être égoiste de temps en temps, maintenant les autres peuvent continuer l'aventure, mais sans vous...`

                                        finalState.textContent = `VOUS AVEZ PERDU`
                                        nextBtn.textContent = `REJOUER`
                                        life.style.width = "0%"

                                        leftBtn.style.display ="none"
                                        rightBtn.style.display ="none"

                                        nextBtn.addEventListener("click", () => {
                                        location.reload()
                                        main.style.display = "none"
                                        })

                                    } else if(e.target.className === "yellow") {
                                        fnEndGame()
                                        mainTxt.textContent = `Le glandeur à vraiment eu pitié de vous, il vous à donc donné à manger, mais c'est un glandeur donc il n'a pas reussi à différencier les racines, vous mourrez intoxiqué`
                                        
                                        finalState.textContent = `VOUS AVEZ PERDU`
                                        nextBtn.textContent = `REJOUER`
                                        life.style.width = "0%"

                                        fart.play()
                                        leftBtn.style.display ="none"
                                        rightBtn.style.display ="none"

                                        nextBtn.addEventListener("click", () => {
                                        location.reload()
                                        main.style.display = "none"
                                        })        
                                    }

                                })

                            }
                        })
                    })
                } else {
                    if(e.target.className === "yellow") {
                        leftBtn.style.display ="none"
                        rightBtn.style.display ="none"
                        nextBtn.style.display = "block"
                        mainTxt.textContent = `Attendre sur la plage vous donne faim...`
                        life.style.width = "60%"
                        nextBtn.addEventListener("click", () => {
                            mainTxt.textContent = `Prendre la nourriture ou se laisser vivre`
                            leftBtn.textContent = `Prendre`
                            rightBtn.textContent = `Se laisser vivre`

                            addEventListener("click", (e) => {
                                if(e.target.className ==="red") {
                                    fnEndGame()
                                    mainTxt.textContent = `Vous auriez du vous activer pour différencier le manioc d'une simple racine`
                                    finalState.textContent = `VOUS AVEZ PERDU`
                                    nextBtn.textContent = `REJOUER`
                                    life.style.width = "0%"
                                    leftBtn.style.display ="none"
                                    rightBtn.style.display ="none"

                                    nextBtn.addEventListener("click", () => {
                                        location.reload()
                                        main.style.display = "none"
                                    })
                                } else if(e.target.className === "yellow") {
                                    mainTxt.textContent = `Vous êtes le seul survivant economiser ses forces a été rentable`
                                    life.style.width = "20%"

                                    nextBtn.addEventListener("click", () => {
                                        mainTxt.textContent = `Il reste une journée d'aventure, continuer ou arrêter ?`
                                        leftBtn.textContent = `Continuer`
                                        rightBtn.textContent = `Arrêter`


                                        addEventListener("click", (e) => {
                                            if(e.target.className === "red") {
                                                fnEndGame()
                                                mainTxt.textContent = `Vous avez gagné, mais votre façon de faire n'a pas plus aux téléspectateurs; ils éprouvent du dégoût pour vous, on vous appelle dorénavant "El Caffardo", vous allez finir seul...`
                                                finalState.textContent = `VOUS VOUS ETES TRANSFORME EN CAFARD`
                                                nextBtn.textContent = `REJOUER`
                                                life.style.width = "100%"
                                                flies.play()
                                                leftBtn.style.display ="none"
                                                rightBtn.style.display ="none"

                                                nextBtn.addEventListener("click", () => {
                                                    location.reload()
                                                    main.style.display = "none"
                                                })

                                            } else if(e.target.className === "yellow") {
                                                fnEndGame()
                                                mainTxt.textContent = `Vous etes rentré, mais on vous considère comme un lâche qui a arrêté à un jour de la fin, on ne connait plus votre prenom, vous êtes dorénavant surnommé "celui qui a loupé les 100k"`
                                                finalState.textContent = `CELUI QUI A LOUPE LES 100K`
                                                nextBtn.textContent = `REJOUER`
                                                life.style.width = "0%"
                                                leftBtn.style.display ="none"
                                                rightBtn.style.display ="none"
        

                                                nextBtn.addEventListener("click", () => {
                                                    location.reload()
                                                    main.style.display = "none"
                                                })

                                            }
                                        })
                                    })
                                }
                            })
                        })
                    }
                }
    
            }) 
        })
    }
})