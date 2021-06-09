# Public. Can be accessed from anywhere and anyone
# Private. Can only be called through its instance (class)
# Protected. Can be called through any instace (while its from the same class or super class)

class MyClass
    def m1 # This is a public method
        p "Method 1"
        m2
        m3
    end    
    
    private def m2 # This is a private method
        p "Method 2"
    end
    
    protected # Everything under this declaration is protected    
    
    def m3
        p "Method 3"
    end
end

class MySubClass < MyClass
    def m4
        m1
        m2
        m3
        p "Method 4"
    end
end

obj = MySubClass.new
obj.m4
