#break é para sair do laço
#return é para sair do laço e do método
#next vai imediatamente para a próxima iteração
#redo repete o laço do inicio, sem reavaliar a condição

valorX = 10
valorY = 0
list = [50,22,1,0,70]

while valorX >= 0
    puts valorX
    valorX -= 1
end

for i in [1,5,9,11,44,52]
    puts "O número é #{i}"
end

until valorY > 10
    puts valorY
    valorY += 1
end

list.each do |i|
    p i
end