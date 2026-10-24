const budget_client = 20000;
const prix_un_cahier = 1500;
let qtité_cahier = 4;
const prix_un_stylo = 500;
let qtité_stylo = 3;
const mont_cahier = prix_un_cahier*qtité_cahier;
const mont_stylo = prix_un_stylo*qtité_stylo;
const mont_achat = mont_cahier+mont_stylo;
console.log("==== CAISSE ====");
console.log("Cahiers: ",mont_cahier," FCFA");
console.log("Stylos:",mont_stylo, "FCFA");
console.log("Total:",mont_achat, "FCFA");
console.log("Budget:",budget_client, "FCFA");
if(mont_achat <= budget_client ) {
    console.log("Budget suffisant");
}
else{
    console.log("Budget insuffisant");
}
for(let i=1; i<=5; i++) {
    console.log("Achat numéro", +i);
}