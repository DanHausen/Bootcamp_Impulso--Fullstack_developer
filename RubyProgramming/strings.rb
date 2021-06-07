#Everytime we use the String, Ruby will set it to a diferent object_id on memory
name = 'Daniel'
message = %Q(Eu sou #{name})
puts message #puts serve para exibir a mensagem no console
puts message.length #podemos acessar diversos metodos para cada variavel ou valor
puts name[2]
puts "Daniel"[2]
puts "Daniel"[-1] #Serve para pegar o ultimo indice
puts "Daniel"[0,3]
puts "    dan    ".strip.capitalize * 10
puts "Dan".upcase * 10
puts "Dan".downcase * 10

puts ["1","2","3"] #Exibe os valores individualmete
print ["1","2","3"] #Nao quebra a linha automaticamente
p ["1","2","3"] #Quebra a linha automaticamente

mensagem = <<~TXT
Bom dia, esse sou eu testando
o Ruby
TXT
puts mensagem

# Print Hello World
puts "Hello, World!"
puts "Hello, \"World!\""
puts "Hello, \tWorld!"
puts "Hello, \nWorld!"