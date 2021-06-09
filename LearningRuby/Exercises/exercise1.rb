#Verificar se a palavra é palíndromo, ou seja, igual de traz pra frente

p "Insira uma palavra"
x = gets.chomp().downcase

def verifyPalindrom?(value)
    value == value.reverse
end

if verifyPalindrom?(x) == true
    p "É uma palavra palíndromo"
else
    p "Não é uma palavra palíndromo"
end