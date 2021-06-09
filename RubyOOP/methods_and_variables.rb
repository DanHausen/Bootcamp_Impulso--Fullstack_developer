class ClassName
    def printHello(name)
        @name = name #For security
        puts "Hello, #{@name}"
    end
end

object = ClassName.new
object.printHello("Daniel")