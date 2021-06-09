# A chave do hash é um objeto, tornando o acesso muito mais rápido

hash = {:nome => "Daniel", :idade => 25}

h = Hash.new

p hash[:nome]