//AND lógico (&&)
exp1 && exp2

var a1 = true && true;          // retorna true
var a2 = true && false;         // retorna false
var a3 = false && true;         // retorna false
var a4 = false && (3==4);       // retorna false
var a5 = "Gato" && "Cachorro";  // retorna Cachorro
var a6 = false && "Cachorro";   // retorna false
var a7 = "Cachorro" && false;   // retorna false

//OU lógico (||)
exp1 || exp2

var o1 = true || true;          // retorna true
var o2 = !false || true;        // retorna true
var o3 = true || false;         // retorna true
var o4 = false || (3 == 4);     // retorna false
var o5 = "Gato" || "Cachorro";  // retorna Cachorro
var o6 = false || "Cachorro";   // retorna Cachorro
var o7 = "Cachorro" || false;   // retorna Cachorro

//NOT lógico (!)
!exp1

var n1 = !true;         // Retorna false
var n2 = !false;        // Retorna true
var n3 = !"Cachorro";   // Retorna false