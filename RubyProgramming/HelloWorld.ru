class Hello
    def initialize(nome)
    @nome = nome.capitalize
    end
    def falar
    puts "Hello, #{@nome}"
    end
end

h = Hello.new("World")
g.falar