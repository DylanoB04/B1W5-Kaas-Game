alert("KAAS!");
				var vraag_a = prompt("Is de kaas geel?");
					if (vraag_a == "ja") {
						document.write("De kaas is geel" + "<br>");	
						vraag_a1 = prompt("Zitten er gaten in?");
						console.log("Antwoord 1: De kaas is geel");					
					}
					if (vraag_a == "nee"){
						document.write("De kaas is niet geel" + "<br>");
						vraag_b = prompt("Heeft de kaas blauwe schimmels?");
						console.log("Antwoord 1: De kaas is niet geel");
					}
						var vraag_a1;
							if (vraag_a1 == "ja") {
								vraag_aa1 = prompt("Is de kaas belachelijk duur?");
								document.write("Er zitten gaten in" + "<br>");
								console.log("Antwoord 2: Er zitten gaten in");
							}
							if (vraag_a1 == "nee") {
								vraag_ab1 = prompt("Is de kaas hard als steen?");
								document.write("Er zitten geen gaten in" + "<br>");
								console.log("Antwoord 2: Er zitten geen gaten in");
							}
								var vraag_aa1;
									if (vraag_aa1 == "ja") {
										alert("Dit is Emmenthaler"); 
										document.write("De kaas is belachelijk duur" + "<br>");
										document.write("Soort kaas: Emmenthaler" + "<br>");
										console.log("De kaas is belachelijk duur");
										console.log("Soort kaas: Emmenthaler");
									}
									if (vraag_aa1 == "nee") {
										alert("Dit is Leerdammer");
										document.write("De kaas is niet belachelijk duur" + "<br>");
										document.write("Soort kaas: Leerdammer");
										console.log("Antwoord 3: De kaas is niet belachelijk duur");
										console.log("Soort kaas: Leerdammer");
									}
								var vraag_ab1;
									if (vraag_ab1 == "ja") {
										alert("Dit is Pammigiano Reggiano");
										document.write("Soort kaas: Pammigiano Reggiano");
										console.log("Antwoord 3: De kaas is niet hard als steen");
										console.log("Soort kaas: Pammigiano Reggiano");
									}
									if (vraag_ab1 == "nee") {
										alert("Dit is Goudse kaas");
										document.write("Soort kaas: Goudse kaas");
										console.log("Antwoord 3: De kaas is hard als steen"); 
										console.log("Soort kaas: Goudse kaas");
									}
						var vraag_b;
							if (vraag_b == "ja") {
								vraag_b1 = prompt("Heeft de kaas een korst?");
								document.write("De kaas heeft blauwe schimmels" + "<br>");
								console.log("Antwoord 2: De kaas heeft blauwe schimmels");
							}
							if (vraag_b == "nee") {
								vraag_bb1 = prompt("Heeft de kaas een korst?");
								document.write("De kaas heeft geen blauwe schimmels" + "<br>");
								console.log("Antwoord 2: De kaas heeft geen blauwe schimmels");
							}
								var vraag_b1;
									if (vraag_b1 == "ja") {
										alert("Dit is Camembert");
										document.write("De kaas heeft een korst" + "<br>");
										document.write("Soort kaas: Camembert");
										console.log("Antwoord 3: De kaas heeft een korst");
										console.log("Soort kaas: Camembert");
									}
									if (vraag_b1 == "nee") {
										alert("Dit is Mozzarella");
										document.write("De kaas heeft geen korst" + "<br>");
										document.write("Soort kaas: Mozzarella");
										console.log("Antwoord 3: De kaas heeft geen korst");
										console.log("Soort kaas: Mozzarella");
									}
								var vraag_bb1;
									if (vraag_bb1 == "ja") {
										alert("Dit is Bleu de Rochbaron");
										document.write("De kaas heeft een korst" + "<br>");
										document.write("Soort kaas: Bleu de Rochbaron");
										console.log("Antwoord 3: De kaas heeft een korst");
										console.log("Soort kaas: Bleu de Rochbaron");
									}
									if (vraag_bb1 == "nee") {
										alert("Dit is Foume d'Ambert");
										document.write("De kaas heeft geen korst" + "<br>");
										document.write("Soort kaas: Foume d'Ambert");
										console.log("Antwoord 3: De kaas heeft geen korst");
										console.log("Soort kaas: Foume d'Ambert");
									}
